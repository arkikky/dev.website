import React, { createContext, useContext } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ data, children }) => {
  // const myVariable = {
  //   value: 23,
  // };

  let sharedState = {
    /* whatever you want */ value: 42,
  };

  return (
    <MyContext.Provider value={sharedState}>
      awdawda{children}
    </MyContext.Provider>
  );
};
