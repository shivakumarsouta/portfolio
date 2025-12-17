import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        {project.techStack?.length > 0 && (
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-actions">
        {project.projectLink ? (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        ) : (
          <div className="project-action-btn disabled" />
        )}

        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn"
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
        ) : (
          <div className="project-action-btn disabled" />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;