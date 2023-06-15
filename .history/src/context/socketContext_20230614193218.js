'use client';
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create a new context
const SocketContext = createContext();

// Custom context provider component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  // Establish the Socket.IO connection when the component mounts
  useEffect(() => {
    const socket = io('http://bitepay-xyz-ec2-lb-62650380.us-east-1.elb.amazonaws.com:3000');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('Successfully connected to the ws server!')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from the ws server!')
    })

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Provide the socket object to the child components
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Export the SocketContext
export default SocketContext;
