import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const mode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, mode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
