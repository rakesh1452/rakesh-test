"use client";
import React, { createContext } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const userName = "Shriee GANESHAY NAMAH, Jai Siya Ram";

  return (
    <MyContext.Provider value={userName} className="text-center">
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
