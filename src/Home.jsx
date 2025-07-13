import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function Home() {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error fetching projects:', err));

        fetch('/data/skills.json')
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((err) => console.error('Error fetching skills:', err));

        fetch('/data/blog.json')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error('Error fetching blog posts:', err));
    }, []);

    const skillIcons = {
        JavaScript: 'fab fa-js-square',
        HTML: 'fab fa-html5',
        CSS: 'fab fa-css3-alt',
        Git: 'fab fa-git-alt',
        Python: 'fab fa-python',
        React: 'fab fa-react'
    };

    return (
        <main>
            <Navbar />
            <Hero />
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
                            alt="Profile"
                            className="about-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                        <div className="about-info">
                            <h2 className="section-title">About Me</h2>
                            <p className="section-text">
                                A highly motivated B.Tech (AI & ML) student with expertise in Artificial Intelligence, Machine Learning, and Full-Stack Development. Proficient in Python, Data Science, Web Technologies, and Databases with hands-on experience in building AI-driven applications. A fast learner with strong problem-solving skills, seeking opportunities to contribute to innovative projects in the tech industry.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
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
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <i className={skillIcons[skill]}></i>
                                <span>{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
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
                        A collection of AI/ML and software development projects that showcase my technical skills and expertise.
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
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="section blog-section"
                id="blog"
            >
                <div className="container">
                    <h2 className="section-title">Blog</h2>
                    <p className="section-text">
                        Visit my <a href="https://techtalesbyshivakumar.blogspot.com" target="_blank" rel="noopener noreferrer" className="section-link">Blogger site</a> for more posts!
                    </p>
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <div key={post.id} className="blog-post">
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href={post.link} className="section-link" target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="section contact-section"
                id="contact"
            >
                <div className="container">
                    <p id='contact-p'>GET IN TOUCH</p>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-text">
                        Have a project in mind or want to say hello? Feel free to reach out,
                        and I'll get back to you as soon as possible.
                    </p>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2 className="section-title">Contact Me</h2>
                            <div className="contact-details">
                                <div className="contact-detail">
                                    <i className="fas fa-envelope"></i>
                                    <p><strong>Email:</strong></p><br />
                                    <p>shivakumarsouta18@gmail.com</p>
                                </div>
                                <div className="contact-detail">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p><strong>Location:</strong></p>
                                    <p>Hyderabad, Telangana, India</p>
                                </div>
                            </div>
                            <h5 className='section-sideheading'>Connect with me</h5>
                            <div className="contact-socials">
                                <a href="https://www.linkedin.com/in/shivakumarsouta" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-2x text-primary social-icon"></i>
                                </a>
                                <a href="https://x.com/soutashivakumar?t=N-gyupa5FaUjFjd5ycFQ6A&s=08" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-2x text-primary social-icon"></i>
                                </a>
                                <a href="https://www.facebook.com/share/163fycC6cD/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-2x text-primary social-icon"></i>
                                </a>
                                <a href="https://www.instagram.com/sivudoo" target="_blank" rel="noopener noreferrer">
                                    <i className='fab fa-instagram fa-2x text-primary social-icon'></i>
                                </a>
                                <a href="https://www.reddit.com/user/Sks6957" target="_blank" rel="noopener noreferrer">
                                    <i className='fab fa-reddit fa-2x text-primary social-icon'></i>
                                </a>
                                <a href="https://t.me/shivakumarsouta" target="_blank" rel="noopener noreferrer">
                                    <i className='fab fa-telegram fa-2x text-primary social-icon'></i>
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </main>
    );
}

export default Home;