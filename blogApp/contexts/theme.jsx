import React, { createContext, useState } from "react";
export const Context = createContext(null);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const value = theme === "light" ? "dark" : "light";
    setTheme(value);
  };
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
