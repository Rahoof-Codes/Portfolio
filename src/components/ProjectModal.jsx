import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Banner */}
        <div className="modal-banner-container">
          <img
            src={project.image}
            alt={project.title}
            className="modal-banner-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="modal-banner-gradient" />
          <div className="modal-banner-badge">
            <span>{project.categoryLabel || 'Project'}</span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-body-container">
          <div className="modal-header-strip">
            <span className="modal-project-number">Project {project.num}</span>
            <span className="modal-project-emoji">{project.character}</span>
          </div>

          <h3 id="modal-project-title" className="modal-project-title">
            {project.title}
          </h3>

          <p className="modal-project-desc">{project.desc}</p>

          {/* Highlights */}
          {project.highlights && (
            <div className="modal-highlights-section">
              <h5 className="modal-section-title">
                <Cpu size={16} className="text-cyan" />
                <span>Key Architectural Highlights</span>
              </h5>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={15} className="text-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-tech-section">
            <h5 className="modal-section-title">
              <Layers size={16} className="text-purple" />
              <span>Technology Stack</span>
            </h5>
            <div className="modal-tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="modal-action-row">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>{project.liveLabel || 'Live Demo'}</span>
                <ExternalLink size={16} />
              </a>
            ) : (
              <button className="btn btn-disabled" disabled>
                <span>Private / Internal Demo</span>
              </button>
            )}

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
