import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

  const skillIcons = {
    C: "devicon-c-plain colored",
    Python: "devicon-python-plain colored",
    JavaScript: "devicon-javascript-plain colored",
    React: "devicon-react-original colored",
    HTML: "devicon-html5-plain colored",
    CSS: "devicon-css3-plain colored",
    Git: "devicon-git-plain colored",
    Java: "devicon-java-plain colored",
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <main>
        <Navbar />
        <Hero />

        {/* About Section */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="about-content">
              <img
                src="/images/profile.jpg"
                alt="sk_photo"
                className="about-image"
              />
              <div className="about-info">
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                  I’m a B.Tech (AI & ML) student passionate about applying AI &
                  ML techniques to solve complex problems, improve business
                  outcomes, and contribute to innovative technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skillIcons[skill]}></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <p className="section-text">
              A collection of AI/ML and software development projects.
            </p>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section blog-section" id="blog">
          <div className="container">
            <h2 className="section-title">My Blogs</h2>
            <p className="section-text">
              Visit my{" "}
              <a
                href="https://techtalesbyshivakumar.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-btn"
              >
                <strong>Blog</strong>
              </a>
            </p>
            <div className="blog-grid">
              {posts.map((post) => (
                <div key={post.id} className="blog-post">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="blog-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-dark">
          <div className="container contact-wrapper">
            <div className="contact-left">
              <h2 className="contact-heading">Let's Connect</h2>
              <p className="contact-description">
                I'm actively seeking new opportunities. Whether you have a
                question or just want to say hi, I’ll respond promptly.
              </p>

              <div className="contact-socials">
                <a href="https://github.com/" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="contact-right">
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
