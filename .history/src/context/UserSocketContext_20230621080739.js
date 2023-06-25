'use client';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { io } from 'socket.io-client';
import { useRouter } from 'next/router'

// Create a new context
const UserSocketContext = createContext({});

// Custom context provider component
export const UserSocketProvider = ({ children }) => {

  const router = useRouter();

  const [socket, setSocket] = useState(null);

  const [user, setUser] = useState({
    id: '',
    username: '',
    tableID: 0,
    myItems: [],
    tip: 15,
    total: 0,
    status: 'PROCESSING',
  });

  const [tableMembers, setTableMembers] = useState([]);

  // Establish the Socket.IO connection when the component mounts
  useEffect(() => {
    const socket = io('https://44.195.134.199');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('Successfully connected to the ws server!')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from the ws server!')
      router.push('/disconnected');
    })

    socket.on('setId', (data) => {
      setUser({...user, id: data});
    })

    socket.on('tableMembers', (data) => {
      setTableMembers([...data.slice()]);
    })

    socket.on('tableMemberUpdate', (data) => {

      if (data.id === user.id) {
        setUser({...user, myItems: data.myItems, tip: data.tip, total: data.total, status: data.status});
      }

      setTableMembers((prevTableMembers) => {
        return prevTableMembers.map((member) => {
          if (member.id === data.id) {
            return data;
          } else {
            return member;
          }
        })
      });
    });

    socket.on('userLeft', (data) => {
      setTableMembers((prevTableMembers) => {
        return prevTableMembers.filter((member) => {
          return member.id !== data.id;
        })
      });
    })

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off('connect');
      socket.off('setId');
      socket.off('tableMembers');
      socket.off('tableMemberUpdate');
      socket.off('userLeft');
      socket.disconnect();
    };
  }, []);

  // Provide the socket object to the child components
  return (
    <UserSocketContext.Provider value={{socket, user, setUser, tableMembers}}>
      {children}
    </UserSocketContext.Provider>
  );
};

// Export the SocketContext
export default UserSocketContext;

// Export a custom hook that can be used to consume this context
export const useUserSocketContext = () => useContext(UserSocketContext); 
