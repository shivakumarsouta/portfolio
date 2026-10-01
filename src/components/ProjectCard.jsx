import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="p-6 flex flex-col transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ backgroundColor: '#FEF9E7', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000' }}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto mb-4"
        style={{ border: '3px solid #000000', maxHeight: '250px', objectFit: 'contain' }}
      />

      {project.techStack?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-sm font-bold" style={{ backgroundColor: '#FFE66D', border: '2px solid #000000' }}>
              {tech}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{project.title}</h3>
      <p className="text-base mb-4 flex-grow" style={{ color: '#000000' }}>{project.description}</p>

      <div className="flex gap-3 mt-auto">
        {project.projectLink ? (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ backgroundColor: '#ffde59', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}
            onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
          >
            <FaGithub />
            <span>Code</span>
          </a>
        ) : (
          <div className="flex-1 py-3 flex items-center justify-center gap-2 font-bold opacity-50 cursor-not-allowed" style={{ backgroundColor: '#ffde59', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}>
            <FaGithub />
            <span>Code</span>
          </div>
        )}

        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ backgroundColor: '#72D6A3', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}
            onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
        ) : (
          <div className="flex-1 py-3 flex items-center justify-center gap-2 font-bold opacity-50 cursor-not-allowed" style={{ backgroundColor: '#72D6A3', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }}>
            <FaExternalLinkAlt />
            <span>Live</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
