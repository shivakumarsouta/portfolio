function Hero() {
    return (
        <section className="py-16 md:py-24" style={{ backgroundColor: '#FEF9E7' }}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                    <div className="flex-shrink-0">
                        <img
                            src="/images/sk-icon.png"
                            alt="SK Logo"
                            className="w-56 h-56 md:w-72 md:h-72 object-contain p-4"
                            style={{ border: '3px solid #000000', boxShadow: '6px 6px 0px 0px #000000', backgroundColor: '#FFFFFF', borderRadius: '16px' }}
                        />
                    </div>
                    <div className="max-w-xl text-left flex-1">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide" style={{ color: '#000000' }}>
                            Hi, I'm Shiva Kumar Souta.
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-4" style={{ color: '#333333' }}>
                            AI & ML Enthusiast · Software Developer
                        </p>
                        <p className="text-base md:text-lg lg:text-xl mb-8" style={{ color: '#333333' }}>
                            I build practical software and AI-powered applications that turn ideas into useful solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="px-8 py-4 text-center text-base font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#ffde59', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}>
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 py-4 text-center text-base font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#72D6A3', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}>
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
