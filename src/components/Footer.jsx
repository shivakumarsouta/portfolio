function Footer() {
  return (
    <footer className="py-8 text-center" style={{ backgroundColor: '#FEF9E7', borderTop: '3px solid #000000' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-base" style={{ color: '#000000' }}>
            © 2026 Shiva Kumar Souta. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/shivakumarsouta" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-lg font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.backgroundColor = '#facc15'; e.target.style.color = '#000000'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/shivakumarsouta" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-lg font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.backgroundColor = '#facc15'; e.target.style.color = '#000000'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.freecodecamp.org/shivakumarsouta" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-lg font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.backgroundColor = '#facc15'; e.target.style.color = '#000000'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}>
              <i className="fab fa-free-code-camp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
