import React, { useState } from 'react';
import { CONFIG } from '../config';
import { Search, ExternalLink, Layers, ArrowUpRight, Sparkles, Eye, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = CONFIG;
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Tools & POS' },
  ];

  const filteredProjects = projects.filter((proj) => {
    const query = search.toLowerCase();
    const matchesSearch =
      proj.title.toLowerCase().includes(query) ||
      proj.desc.toLowerCase().includes(query) ||
      proj.tech.some((t) => t.toLowerCase().includes(query));

    if (!matchesSearch) return false;
    if (filter === 'all') return true;

    return proj.category === filter;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">04</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Portfolio Gallery</span>
      </div>

      <div className="projects-header-block">
        <h2 className="section-title">Production Systems & Prototypes</h2>
        <p className="section-desc">
          Real-world applications shipped for clients, production SaaS solutions, and autonomous agent infrastructure.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="projects-control-bar">
        {/* Category Pills */}
        <div className="projects-filter-pills">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="projects-search-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="projects-search-input"
            placeholder="Search by name, tech (e.g. Supabase, Bedrock)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="search-clear-btn"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-display-grid">
        {filteredProjects.map((proj, index) => (
          <div
            key={proj.num}
            className="project-showcase-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {/* Thumbnail Header */}
            <div className="project-thumbnail-box">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-thumb-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.parentElement.style.display = 'none';
                }}
              />
              <div className="project-thumb-overlay" />

              {/* Badges */}
              <div className="project-thumb-badge-row">
                <span className="thumb-category-badge">
                  {proj.categoryLabel || 'Full Stack'}
                </span>
                <span className="thumb-character-badge">{proj.character}</span>
              </div>

              {/* Quick Inspect Button on Hover */}
              <button
                className="thumb-quick-view-btn"
                onClick={() => setActiveModalProject(proj)}
                title="View Architecture Details"
              >
                <Eye size={15} />
                <span>Architecture</span>
              </button>
            </div>

            {/* Card Body */}
            <div className="project-content-box">
              <div className="project-meta-row">
                <span className="project-index-num">#{proj.num}</span>
                <div className="project-top-links">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-top-icon-link"
                      title="Open Live App"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-top-icon-link"
                      title="View Code Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.desc}</p>

              {/* Tech Badges */}
              <div className="project-tech-badges">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom CTAs */}
              <div className="project-card-footer">
                {proj.live ? (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="btn btn-disabled btn-sm">Private Demo</span>
                )}

                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setActiveModalProject(proj)}
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="projects-empty-state">
          <p className="empty-state-text">No projects matched your criteria.</p>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              setSearch('');
              setFilter('all');
            }}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Architecture Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
