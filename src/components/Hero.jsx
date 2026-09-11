import React from 'react';
import { CONFIG } from '../config';
import { Bot, FileText, ArrowRight, Send, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { name, title, heroDesc, badge, contact, resumePath } = CONFIG;
  const [first, last] = name.split(' ');

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#10b981', '#a855f7']
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-blob blob-1" />
      <div className="hero-glow-blob blob-2" />

      <div className="hero-content-grid">
        {/* Left Column: Bio and CTAs */}
        <div className="hero-left">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <Bot size={15} className="hero-badge-icon" />
            <span>{badge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="hero-title">
            <span className="hero-name-light">{first} </span>
            <span className="hero-name-gradient">{last}</span>
          </h1>

          <div className="hero-subtitle-wrap">
            <div className="hero-subtitle-bar" />
            <h2 className="hero-subtitle">{title}</h2>
          </div>

          {/* Description */}
          <p className="hero-description">{heroDesc}</p>

          {/* Quick Telemetry Chips */}
          <div className="hero-telemetry-chips">
            <div className="telemetry-chip">
              <Cpu size={14} className="text-cyan" />
              <span>Multi-Agent Pipelines</span>
            </div>
            <div className="telemetry-chip">
              <ShieldCheck size={14} className="text-emerald" />
              <span>AWS Bedrock Guardrails</span>
            </div>
            <div className="telemetry-chip">
              <Sparkles size={14} className="text-purple" />
              <span>Full-Stack Architecture</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#agent-lab" className="btn btn-primary">
              <span>Test Agent Lab</span>
              <Bot size={17} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>
            <a
              href={resumePath}
              download
              onClick={handleResumeClick}
              className="btn btn-resume"
            >
              <FileText size={17} />
              <span>Resume</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              title="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost" title="Contact Me">
              <Send size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Cyber Avatar Frame with Interactive Glow */}
        <div className="hero-right">
          <div className="avatar-cyber-container">
            <div className="avatar-ambient-glow" />
            <div className="avatar-cyber-ring" />
            <div className="avatar-bracket corner-tl" />
            <div className="avatar-bracket corner-tr" />
            <div className="avatar-bracket corner-bl" />
            <div className="avatar-bracket corner-br" />

            <div className="avatar-image-frame">
              <img
                src={CONFIG.photo}
                alt={name}
                className="avatar-core-image"
                loading="eager"
              />
              <div className="avatar-scan-overlay" />
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-chip chip-top-left">
              <span className="chip-indicator" />
              <span>🧠 LangGraph</span>
            </div>
            <div className="floating-chip chip-top-right">
              <span className="chip-indicator green" />
              <span>🛡️ AWS Bedrock</span>
            </div>
            <div className="floating-chip chip-bottom-left">
              <span className="chip-indicator purple" />
              <span>⚡ Supabase & React</span>
            </div>
            <div className="floating-chip chip-bottom-right">
              <span className="chip-indicator amber" />
              <span>🔴 PyRIT Red-Teaming</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#agent-lab" className="scroll-pill" aria-label="Scroll down">
          <span className="scroll-wheel" />
          <span className="scroll-text">EXPLORE LAB</span>
        </a>
      </div>
    </section>
  );
}
