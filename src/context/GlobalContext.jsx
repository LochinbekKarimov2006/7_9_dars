import React, { createContext, useState } from 'react';
const MyContext = createContext();
const GlobalContext = ({ children }) => {
  const [state, setState] = useState([]);
  const [state1, setState1] = useState("VRDWYGT-S5W4NTK-HFGZ3PE-W6EZB8K");

  return (
    <MyContext.Provider value={{ state, setState, state1, setState1 }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, GlobalContext };
