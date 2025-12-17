import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#about" className="navbar-brand">
          Shiva Kumar
        </a>

        {/* Hamburger */}
        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="navbar-link"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}

          <a
            href="/ShivaKumarSouta_Resume.pdf"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
