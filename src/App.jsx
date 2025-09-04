import StarBackground from "./components/StarBackground";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));

    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));

    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching blog posts:", err));
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
    <ThemeProvider>
      <StarBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <main>
          <Navbar />
          <Hero />

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="section about-section"
            id="about"
          >
            <div className="container">
              <div className="about-content">
                <motion.img
                  src="/images/profile.jpg"
                  alt="sk_photo"
                  className="about-image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="about-info">
                  <h2 className="section-title">About Me</h2>
                  <p className="section-text">
                    I’m a B.Tech (AI & ML) student with strong expertise in
                    Artificial Intelligence, Machine Learning, and Web Development.
                    Proficient in Python, Data Science, and Web Technologies. I
                    bring hands-on experience in building real-world, AI-driven
                    solutions. I love contributing to cutting-edge innovation in the
                    tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="section skills-section"
            id="skills"
          >
            <div className="container">
              <h2 className="section-title">My Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className={skillIcons[skill]}></i>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="section projects-section"
            id="projects"
          >
            <div className="container">
              <h2 className="section-title">My Projects</h2>
              <p className="section-text">
                A collection of AI/ML and software development projects that
                showcase my technical skills and expertise.
              </p>
              <div className="project-grid">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="section blog-section"
            id="blog"
          >
            <div className="container">
              <h2 className="section-title">My Blogs</h2>
              <p className="section-text">
                Visit my{" "}
                <a
                  href="https://techtalesbyshivakumar.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-link"
                >
                  Blogger site
                </a>{" "}
                for more posts!
              </p>
              <div className="blog-grid">
                {posts.map((post) => (
                  <div key={post.id} className="blog-post">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <a
                      href={post.link}
                      className="section-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="section contact-section"
            id="contact"
          >
            <div className="container">
              <p id="contact-p">GET IN TOUCH</p>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="section-text">
                Have a project in mind or want to say hello? Feel free to reach out,
                and I'll get back to you as soon as possible.
              </p>
              <div className="contact-content">
                <div className="contact-content">
                  <div className="contact-info">
                    <h3>Contact Information</h3>

                    <div className="contact-detail">
                      <div className="contact-detail-icon">
                        <FiMail size={25} />
                      </div>
                      <div className="contact-detail-content">
                        <h4>Email</h4>
                        <a href="mailto:shivakumarsouta18@gmail.com">
                          shivakumarsouta18@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="contact-detail">
                      <div className="contact-detail-icon">
                        <FiPhone size={25} />
                      </div>
                      <div className="contact-detail-content">
                        <h4>Phone</h4>
                        <a href="tel:+918790726965">+91 879 072 6965</a>
                      </div>
                    </div>

                    <div className="contact-detail">
                      <div className="contact-detail-icon">
                        <FiMapPin size={25} />
                      </div>
                      <div className="contact-detail-content">
                        <h4>Location</h4>
                        <p>Hyderabad, Telangana, India</p>
                      </div>
                    </div>

                    <h3>Connect with me</h3>
                    <div className="contact-socials">
                      <a href="https://www.linkedin.com/in/shivakumarsouta/" target="_blank">
                        <FaXTwitter size={25} />
                      </a>
                      <a href="https://www.instagram.com/sivudoo/" target="_blank">
                        <FaInstagram size={25} />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61571819434662&rdid=1k15CAb9cJPNaa8C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163fycC6cD%2F#" target="_blank">
                        <FaFacebook size={25} />
                      </a>
                      <a href="https://t.me/shivakumarsouta" target="_blank">
                        <FaTelegram size={25} />
                      </a>
                    </div>
                  </div>

                  <div className="contact-form-wrapper">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;