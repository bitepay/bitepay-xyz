'use client';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { io } from 'socket.io-client';

// Create a new context
const UserSocketContext = createContext({});

// Custom context provider component
export const UserSocketProvider = ({ children }) => {

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
    const socket = io('https://bitepay.xyz');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('Successfully connected to the ws server!')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from the ws server!')
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

    socket.on('disconnect', () => {
      alert('you have been disconnected from server. Please re-join table via the home page');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Provide the socket object to the child components
  return (
    <UserSocketProvider.Provider value={{socket, user, tableMembers}}>
      {children}
    </UserSocketProvider.Provider>
  );
};

// Export the SocketContext
export default UserSocketContext;

// Export a custom hook that can be used to consume this context
export const useUserSocketContext = () => useContext(UserSocketContext); 
