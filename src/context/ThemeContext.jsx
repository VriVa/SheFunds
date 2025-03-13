import React, { createContext, useState, useEffect } from 'react';

// Create Theme Context
export const ThemeContext = createContext();

// Create Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved preference, or default to false (light mode)
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
    
    // Optionally, you can also add a data-theme attribute to the document
    // for global CSS targeting if needed
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