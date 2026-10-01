import { useState } from "react";
import { FaBars, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: '#FEF9E7', borderBottom: '3px solid #000000' }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand link with icon beside text */}
        <a href="#" className="flex items-center gap-3 text-xl md:text-2xl font-bold" style={{ color: '#000000' }}>
          <img 
            src="/images/sk-icon.png" 
            alt="SK" 
            className="w-10 h-10 object-contain flex-shrink-0" 
            style={{ border: '2px solid #000000', borderRadius: '6px', backgroundColor: '#FFFFFF' }} 
          />
          {/* Hover underline group applies exclusively to the name */}
          <span className="relative inline-block group whitespace-nowrap">
            Shiva Kumar
            <span 
              className="absolute left-0 w-0 h-0.5 bg-[#facc15] transition-all duration-300 group-hover:w-full" 
              style={{ bottom: '-2px' }}
            ></span>
          </span>
        </a>

        {/* Hamburger button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} style={{ color: '#000000' }}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <div className={`md:flex gap-4 md:gap-6 items-center ${open ? "flex flex-col w-full mt-4" : "hidden"}`}>
          {["Home", "About", "Skills", "Projects", "Writing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : item === "Writing" ? "#blog" : `#${item.toLowerCase()}`}
                className="text-base md:text-lg font-bold relative inline-block group"
                style={{ color: '#000000' }}
                onClick={() => setOpen(false)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] transition-all duration-300 group-hover:w-full" style={{ bottom: '-2px' }}></span>
              </a>
            )
          )}

          <a
            href="https://drive.google.com/file/d/1W9UFCZ8653qB1GAjVQXGsl_DsPgRkoYL/view?usp=sharing"
            className="px-6 py-2 font-bold inline-flex items-center gap-2 transition-all duration-150"
            style={{ backgroundColor: '#ffde59', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000000'; e.currentTarget.style.transform = 'translate(-2px, -2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;