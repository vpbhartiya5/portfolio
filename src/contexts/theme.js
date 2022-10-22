import { createContext, useEffect, useState } from "react";
import React from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const isThemeSelected = localStorage.getItem("themeName");
    setThemeName(isThemeSelected ? isThemeSelected : "light");
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
