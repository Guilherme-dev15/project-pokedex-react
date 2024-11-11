import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };