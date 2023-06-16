'use client';
import React, { createContext, useState, useContext } from 'react';

// Create a new context
const UserContext = createContext({});

// Custom context provider component
export const UserProvider = ({ children }) => {

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

  return (
    <UserContext.Provider value={{user, setUser, tableMembers, setTableMembers}}>
      {children}
    </UserContext.Provider>
  );
};

// Export the UserContext
export default UserContext;

// Export a custom hook that can be used to consume this context
export const useUserContext = () => useContext(UserContext); 
