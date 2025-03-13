import React, { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('shefunds-dark-mode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shefunds-dark-mode', JSON.stringify(darkMode));
    
    
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};