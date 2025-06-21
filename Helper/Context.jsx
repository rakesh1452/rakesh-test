"use client";
import React, { createContext } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const userName = "Jai Siya Ram";

  return (
    <MyContext.Provider value={userName}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
