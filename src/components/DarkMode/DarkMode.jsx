import React, { useEffect, useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  const lightTheme = 'light';
  const darkTheme = 'dark';
  const clickedClass = 'clicked';

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || darkTheme
  );

  useEffect(() => {
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(prev => (prev === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <div
      className={theme === darkTheme ? clickedClass : ''}
      id="darkMode"
      onClick={switchTheme}
    >
      <span><i className="fas fa-sun"></i></span>
      <span><i className="fas fa-moon"></i></span>
    </div>
  );
};

export default DarkMode;
