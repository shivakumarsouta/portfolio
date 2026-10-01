import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaArrowUp } from "react-icons/fa";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);

    fetch("/data/skills.json")
      .then((res) => res.json())
      .then(setSkills)
      .catch(console.error);

    fetch("/data/blog.json")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillIcons = {
    Python: "devicon-python-plain colored",
    Java: "devicon-java-plain colored",
    JavaScript: "devicon-javascript-plain colored",
    SQL: "devicon-azuresqldatabase-plain colored",
    HTML: "devicon-html5-plain colored",
    CSS: "devicon-css3-plain colored",
    "React.js": "devicon-react-original colored",
    Git: "devicon-git-plain colored",
    GitHub: "devicon-github-original colored",
    Streamlit: "devicon-streamlit-plain colored",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <main>
        <Navbar />
        <Hero />

        {/* About Section */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FEF9E7' }} id="about">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <img
                src="/images/shiva_github.jpg"
                alt="sk_photo"
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
                style={{ border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', backgroundColor: '#FFF8E7' }}
              />
              <div className="max-w-xl text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#000000' }}>About Me</h2>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000' }}>
                  I'm a B.Tech CSE (AI & ML) graduate focused on software development and artificial intelligence. I enjoy building practical applications, solving problems through code, and exploring how AI can be applied to real-world challenges.

                  I've worked across Python, Java, databases, web development, and AI/ML, building projects that combine technology with practical use cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FEF9E7' }} id="skills">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-center" style={{ color: '#000000' }}>Skills & Technologies</h2>
            <p className="text-base md:text-lg text-center mb-8" style={{ color: '#333333' }}>Technologies I use to build, experiment, and solve problems.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Skills */}
              <div className="lg:col-span-2 space-y-10">
                {/* Programming */}
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#000000' }}>Programming</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.filter(s => ["Python", "Java", "JavaScript"].includes(s)).map((skill, index) => (
                      <div key={index} className="p-5 flex flex-col items-center gap-3 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', borderRadius: '8px' }}>
                        <i className={skillIcons[skill]} style={{ fontSize: '2.5rem' }}></i>
                        <span className="text-sm font-bold text-center" style={{ color: '#000000' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Development */}
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#000000' }}>Web Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.filter(s => ["HTML", "CSS", "React.js"].includes(s)).map((skill, index) => (
                      <div key={index} className="p-5 flex flex-col items-center gap-3 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', borderRadius: '8px' }}>
                        <i className={skillIcons[skill]} style={{ fontSize: '2.5rem' }}></i>
                      <span className="text-sm font-bold text-center" style={{ color: '#000000' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#000000' }}>Tools & Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.filter(s => ["Git", "GitHub", "Streamlit"].includes(s)).map((skill, index) => (
                      <div key={index} className="p-5 flex flex-col items-center gap-3 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', borderRadius: '8px' }}>
                        <i className={skillIcons[skill]} style={{ fontSize: '2.5rem' }}></i>
                        <span className="text-sm font-bold text-center" style={{ color: '#000000' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#000000' }}>Database</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.filter(s => ["SQL"].includes(s)).map((skill, index) => (
                      <div key={index} className="p-5 flex flex-col items-center gap-3 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', borderRadius: '8px' }}>
                        <i className={skillIcons[skill]} style={{ fontSize: '2.5rem' }}></i>
                        <span className="text-sm font-bold text-center" style={{ color: '#000000' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Quote */}
              <div className="lg:col-span-1">
                {/* Quote Card */}
                <div className="p-6 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] lg:sticky lg:top-24" style={{ backgroundColor: '#72D6A3', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', borderRadius: '8px' }}>
                  <p className="text-lg font-bold italic" style={{ color: '#000000' }}>
                    "Always learning, always building."
                  </p>
                  <p className="text-sm mt-2" style={{ color: '#000000' }}>
                    — Shiva Kumar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FEF9E7' }} id="projects">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-center" style={{ color: '#000000' }}>Selected Projects</h2>
            <p className="text-base md:text-lg text-center mb-8 max-w-2xl mx-auto" style={{ color: '#333333' }}>
              A selection of projects I've built while exploring software development, AI, and practical problem solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FEF9E7' }} id="blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-center" style={{ color: '#000000' }}>Writing & Insights</h2>
            <p className="text-base md:text-lg text-center mb-8" style={{ color: '#333333' }}>
              Notes on technology, development, AI, and things I'm learning along the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {posts.map((post) => (
                <div key={post.id} className="p-6 flex flex-col transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FEF9E7', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{post.title}</h3>
                  <p className="text-base mb-4 flex-grow" style={{ color: '#000000' }}>{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="inline-block px-6 py-3 text-center font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] w-[85%] mx-auto"
                    style={{ backgroundColor: '#72D6A3', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}
                    onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }}
                    onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 px-4" style={{ backgroundColor: '#FEF9E7' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide text-center" style={{ color: '#000000' }}>Let's Connect</h2>
            <p className="text-base md:text-lg text-center mb-6" style={{ color: '#333333' }}>
              Have a project, opportunity, or idea? Let's talk.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 mt-4">
              {/* Left Half */}
              <div className="flex-1 p-6" style={{ backgroundColor: '#FEF9E7', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                <p className="text-base mb-6" style={{ color: '#333333' }}>
                  I'm open to opportunities, collaborations, and conversations around software development and AI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Email - Full Width */}
                  <div className="p-4 md:col-span-2 flex items-center" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                    <div className="flex-1">
                      <span className="text-sm uppercase opacity-60 block mb-1" style={{ color: '#000000' }}>Email</span>
                      <a
                        href="mailto:shivakumarsouta18@gmail.com"
                        className="text-base font-bold break-all relative inline-block group"
                        style={{ color: '#000000' }}
                      >
                        shivakumarsouta18@gmail.com
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] transition-all duration-300 group-hover:w-full" style={{ bottom: '-2px' }}></span>
                      </a>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ml-4" style={{ height: '100%' }}>
                      <FaEnvelope style={{ fontSize: '2rem' }} />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-4 md:col-span-2 flex items-center" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                    <div className="flex-1">
                      <span className="text-sm uppercase opacity-60 block mb-1" style={{ color: '#000000' }}>Location</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Hyderabad,Telangana,India"
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-bold relative inline-block group"
                        style={{ color: '#000000' }}
                      >
                        Hyderabad, Telangana, India
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#facc15] transition-all duration-300 group-hover:w-full" style={{ bottom: '-2px' }}></span>
                      </a>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ml-4" style={{ height: '100%' }}>
                      <FaMapMarkerAlt style={{ fontSize: '2rem' }} />
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="p-4 md:col-span-2 flex items-center" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                    <div className="flex-1">
                      <span className="text-sm uppercase opacity-60 block mb-1" style={{ color: '#000000' }}>Currently Open To</span>
                      <span className="text-base font-bold" style={{ color: '#000000' }}>
                        Freelancing · Full-Time Roles · Collaborations
                      </span>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ml-4" style={{ height: '100%' }}>
                      <FaBriefcase style={{ fontSize: '2rem' }} />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <a href="https://github.com/shivakumarsouta" target="_blank" className="px-4 py-3 text-xl font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.backgroundColor = '#ffde59'; e.target.style.color = '#000000'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}>
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/shivakumarsouta" target="_blank" className="px-4 py-3 text-xl font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.backgroundColor = '#ffde59'; e.target.style.color = '#000000'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#000000'; }}>
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Right Half */}
              <div className="flex-1 p-6" style={{ backgroundColor: '#FEF9E7', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ backgroundColor: '#ffde59', border: '3px solid #000000', boxShadow: '3px 3px 0px 0px #000000', color: '#000000' }}
            onMouseEnter={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = '3px 3px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
          >
            <FaArrowUp style={{ fontSize: '1.5rem' }} />
          </button>
        )}
      </main>
    </div>
  );
}

export default App;