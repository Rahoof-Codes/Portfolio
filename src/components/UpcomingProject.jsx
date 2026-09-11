import React from 'react';
import { CONFIG } from '../config';
import { Bot, ShieldAlert, Layers, Flame, ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

const featureIconMap = {
  Bot: Bot,
  ShieldAlert: ShieldAlert,
  Layers: Layers,
  Flame: Flame,
};

export default function UpcomingProject() {
  const { wip } = CONFIG;

  const pipelineStages = [
    { label: 'LangGraph Flow', done: true },
    { label: 'AWS Bedrock Guardrails', done: true },
    { label: '3-Tier Memory (pgvector)', done: true },
    { label: 'PyRIT Red Teaming', done: false },
    { label: 'Terraform & CI/CD', done: false },
  ];

  return (
    <section id="upcoming" className="upcoming-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">05</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Flagship In-Progress Architecture</span>
      </div>

      <div className="upcoming-header-wrap">
        <h2 className="section-title">What I'm Currently Building</h2>
        <p className="section-desc">
          Pushing the boundaries of autonomous multi-agent systems with enterprise guardrails and adversarial evaluation.
        </p>
      </div>

      {/* Flagship Hero Card */}
      <div className="upcoming-flagship-card">
        {/* Background Banner with Glass Overlay */}
        <div className="flagship-bg-wrapper">
          <img
            src="images/ai-research-platform.jpg"
            alt={wip.name}
            className="flagship-bg-image"
          />
          <div className="flagship-bg-overlay" />
          <div className="flagship-scanlines" />
          <div className="flagship-ambient-glow" />
        </div>

        {/* Card Content Grid */}
        <div className="flagship-card-grid">
          {/* Left Column: Mission Briefing */}
          <div className="flagship-left-col">
            <div className="flagship-badge-strip">
              <span className="status-live-pill">
                <span className="pulse-indicator" />
                <span>{wip.status}</span>
              </span>
              <span className="progress-pill">{wip.progress}% Shipped</span>
            </div>

            <h3 className="flagship-title">{wip.name}</h3>
            <p className="flagship-tagline">{wip.tagline}</p>
            <p className="flagship-desc">{wip.description}</p>

            {/* Tech Tags */}
            <div className="flagship-tech-list">
              {wip.tech.map((t) => (
                <span key={t} className="flagship-tech-badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="flagship-action-row">
              <a
                href={wip.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <GithubIcon size={16} />
                <span>Follow Progress on GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Build Progress & Architecture Highlights */}
          <div className="flagship-right-col">
            {/* Progress Gauge Box */}
            <div className="flagship-progress-box">
              <div className="progress-box-header">
                <span className="progress-box-title">
                  <Cpu size={15} className="text-cyan" />
                  <span>Deployment Timeline</span>
                </span>
                <span className="progress-box-pct">{wip.progress}%</span>
              </div>

              {/* Progress Bar */}
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${wip.progress}%` }}
                />
              </div>

              {/* Timeline Milestones */}
              <div className="progress-milestones">
                {pipelineStages.map((stage, idx) => (
                  <div
                    key={stage.label}
                    className={`milestone-step ${stage.done ? 'completed' : ''}`}
                  >
                    <div className="milestone-dot">
                      {stage.done ? <CheckCircle2 size={12} /> : idx + 1}
                    </div>
                    <span className="milestone-label">{stage.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Mini Cards */}
            <div className="flagship-features-grid">
              {wip.features.map((feat, i) => {
                const IconComp = featureIconMap[feat.icon] || Bot;
                return (
                  <div key={i} className="flagship-feature-tile">
                    <div className="feature-tile-icon">
                      <IconComp size={18} />
                    </div>
                    <div className="feature-tile-text">
                      <h5>{feat.title}</h5>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
