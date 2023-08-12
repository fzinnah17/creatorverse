// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// // Create a context for theme
// const ThemeContext = React.createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export const Navbar = () => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.body.setAttribute('data-theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className="navbar">
//         <Link to="/" className="home-link">Home</Link>
//         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//           Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
//         </button>
//       </div>
//     </ThemeContext.Provider>
//   );
// };


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './App';

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
      if(theme === 'light') {
          setTheme('dark');
      } else {
          setTheme('light');
      }
  }

  return (
      <div className="navbar">
          <Link to="/" className="home-link">Home</Link>
          <div className="btn-dark-mode" onClick={toggleTheme}>
              <div className="slider" style={{ justifyContent: theme === 'light' ? 'flex-start' : 'flex-end' }}></div>
          </div>
      </div>
  );
};
