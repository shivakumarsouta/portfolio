import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />
      <h3 className="project-title">
        {project.title}
      </h3>
      <p className="project-description">
        {project.description}
      </p>

      {/* Tech Stack Row */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="project-links">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Code <FaExternalLinkAlt className="icon" />
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            Live Demo <FaExternalLinkAlt className="icon" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
