import React, { createContext, useState } from 'react';
const MyContext = createContext();
const GlobalContext = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, GlobalContext };
