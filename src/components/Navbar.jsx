import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#about" className="navbar-brand">Shiva Kumar Souta</a>
          <div className="navbar-links">
            <a href="#about" className="navbar-link">About</a>
            <a href="#skills" className="navbar-link">Skills</a>
            <a href="#projects" className="navbar-link">Projects</a>
            <a href="#blog" className="navbar-link">Blog</a>
            <a href="#contact" className="navbar-link">Contact</a>
            <a href="/ShivaKumarSoutaResume.pdf" className="navbar-link" target="_blank" rel="noopener noreferrer">Resume</a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;