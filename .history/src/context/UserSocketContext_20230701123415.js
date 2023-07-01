'use client';
import React, { createContext, useEffect, useState, useContext } from 'react'
import { io } from 'socket.io-client'
import { useRouter } from 'next/router'


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

  const router = useRouter();

  // Establish the Socket.IO connection when the component mounts
  useEffect(() => {

    const socket = io('https://bitepay.xyz');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('Successfully connected to the ws server!')
    })

    // set user id to the websocket id
    socket.on('setId', (data) => setUser((prevUser) => {
      prevUser.id = data
      return prevUser;
    }));

    // listen to events from ws server regarding members of the table
    socket.on('tableMembers', (data) => setTableMembers((prevTableMembers) => { return [...data.slice()] }));

    // listen to events from ws server regarding updates to tableMembers
    socket.on('tableMemberUpdate', (data) => {

      if (data.id === user.id) {
        setUser((prevUser) => {
          prevUser.myItems = data.myItems;
          prevUser.tip = data.tip;
          prevUser.total = data.total;
          prevUser.status = data.status;
          return prevUser;
        })
      }

      setTableMembers((prevTableMembers) => {
        return prevTableMembers.map((member) => {
          if (member.id === data.id) {
            member.myItems = data.myItems
            member.tip = data.tip
            member.total = data.total
            member.status = data.status
            return member
          } else {
            return member
          }
        })
      })
    });

    // listen to events from ws server regarding members leaving the table
    socket.on('userLeft', (data) => {
      setTableMembers((prevTableMembers) => {
        return prevTableMembers.filter((member) => {
          return member.id !== data.id
        })
      })
    });

    socket.on('disconnect', () => { 
      console.log('Disconnected from the ws server!');
      router.push('/disconnected');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off('connect');
      socket.off('setId');
      socket.off('tableMembers');
      socket.off('tableMemberUpdate');
      socket.off('userLeft');
      socket.disconnect();
    };
  }, [user.id, router]);

  // Provide the socket object to the child components
  return (
    <UserSocketContext.Provider value={{socket, user, setUser, tableMembers, setTableMembers}}>
      {children}
    </UserSocketContext.Provider>
  );
};

// Export the SocketContext
export default UserSocketContext;

// Export a custom hook that can be used to consume this context
export const useUserSocketContext = () => useContext(UserSocketContext); 
