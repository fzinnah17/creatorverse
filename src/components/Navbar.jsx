import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ThemeContext } from './App.jsx';
import { ThemeContext } from '../App';
import "./Navbar.css";

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

export default Navbar;

