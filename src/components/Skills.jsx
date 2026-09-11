import React, { useState } from 'react';
import { CONFIG } from '../config';
import { Brain, Globe, Cloud, Wrench, Sparkles, Code2, Layers } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Globe: Globe,
  Cloud: Cloud,
  Wrench: Wrench,
};

export default function Skills() {
  const { skills } = CONFIG;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'ai', label: 'AI & LLMs' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const filteredSkills = skills.filter((group) => {
    if (activeCategory === 'all') return true;
    return group.category === activeCategory;
  });

  return (
    <section id="skills" className="skills-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">03</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Skills & Arsenal</span>
      </div>

      <div className="skills-header">
        <h2 className="section-title">Technical Mastery & Tooling</h2>
        <p className="section-desc">
          From autonomous agent orchestration to scalable full-stack web platforms and cloud-native backends.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((group, index) => {
          const IconComponent = iconMap[group.icon] || Code2;

          return (
            <div
              key={group.title}
              className={`skill-group-card ${group.highlight ? 'highlight-card' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-badge">
                  <IconComponent size={22} className="skill-icon-svg" />
                </div>
                <div className="skill-title-block">
                  <h4>{group.title}</h4>
                  {group.highlight && (
                    <span className="skill-specialty-badge">Primary Focus</span>
                  )}
                </div>
              </div>

              {/* Mastery Level Bar */}
              <div className="skill-level-container">
                <div className="skill-level-header">
                  <span className="level-label">Proficiency</span>
                  <span className="level-percent">{group.level}%</span>
                </div>
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${group.level}%` }}
                  />
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="skill-tags-cloud">
                {group.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

