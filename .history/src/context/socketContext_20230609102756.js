import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create a new context
const SocketContext = createContext();

// Custom context provider component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  // Establish the Socket.IO connection when the component mounts
  useEffect(() => {
    const socket = io('https://18.212.194.9');
    setSocket(socket);

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
