import React from 'react';
import { CONFIG } from '../config';
import { MapPin, GraduationCap, Briefcase, Bot, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function About() {
  const { name, photo2, tagline, bio, resumePath, telemetry } = CONFIG;

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#10b981', '#a855f7']
    });
  };

  return (
    <section id="about" className="about-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">02</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">About Me</span>
      </div>

      <div className="about-grid">
        {/* Left Column: Photo & Stats */}
        <div className="about-photo-col">
          <div className="about-photo-card">
            <div className="about-photo-frame">
              <img src={photo2} alt={name} className="about-photo-img" loading="lazy" />
              <div className="about-photo-glow" />
              <div className="about-bracket corner-tl" />
              <div className="about-bracket corner-br" />
            </div>

            <div className="about-status-strip">
              <span className="status-dot green" />
              <span>{telemetry.status}</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="about-stat-row">
            <div className="about-stat-box">
              <span className="stat-value">{telemetry.experienceYears}</span>
              <span className="stat-label">Years of<br />Experience</span>
            </div>
            <div className="about-stat-box">
              <span className="stat-value">{telemetry.projectsShipped}</span>
              <span className="stat-label">Production<br />Projects</span>
            </div>
            <div className="about-stat-box">
              <span className="stat-value">{telemetry.happyClients}</span>
              <span className="stat-label">Happy<br />Clients</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio and Highlights */}
        <div className="about-text-col">
          <h2 className="section-title">Architecting The Autonomous Future</h2>
          <p className="about-tagline">{tagline}</p>

          <div className="about-body-paragraphs">
            {bio.map((para, i) => (
              <p key={i} className="about-body-text">{para}</p>
            ))}
          </div>

          {/* Key Pillars */}
          <div className="about-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-wrap">
                <Bot size={18} className="text-cyan" />
              </div>
              <div className="pillar-info">
                <h5>Multi-Agent Systems</h5>
                <p>LangGraph cyclical workflows, state management & tool sandboxing</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-wrap">
                <CheckCircle2 size={18} className="text-emerald" />
              </div>
              <div className="pillar-info">
                <h5>Production Guardrails</h5>
                <p>AWS Bedrock content moderation, PII defense & PyRIT red-teaming</p>
              </div>
            </div>
          </div>

          {/* Detail Pills */}
          <div className="about-detail-pills">
            <div className="detail-pill">
              <MapPin size={14} className="text-cyan" />
              <span>{telemetry.location}</span>
            </div>
            <div className="detail-pill">
              <GraduationCap size={14} className="text-purple" />
              <span>BCA Scholar</span>
            </div>
            <div className="detail-pill">
              <Briefcase size={14} className="text-emerald" />
              <span>Available for Roles & Freelance</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-cta-btns">
            <a href={`mailto:${CONFIG.contact.email}`} className="btn btn-primary">
              <span>Hire Me</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={resumePath}
              download
              onClick={handleResumeClick}
              className="btn btn-resume"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
            <a href="#projects" className="btn btn-outline">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

