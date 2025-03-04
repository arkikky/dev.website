import React, { createContext, useContext, useState } from 'react';

// @context(global)
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isGlobal, setGlobal] = useState({
    language: 'en',
  });
  const [isStore, setStore] = useState({
    products: [],
    totalQty: 0,
    discntAmount: 0,
    totalOrder: 0,
  });

  return (
    <GlobalContext.Provider
      value={{
        global: isGlobal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// @hook (global-context)
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
