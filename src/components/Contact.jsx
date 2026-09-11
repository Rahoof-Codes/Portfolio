import React, { useState } from 'react';
import { CONFIG } from '../config';
import { Mail, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { contact } = CONFIG;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#10b981', '#a855f7']
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#10b981', '#a855f7']
    });

    // Open user's default email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Abdul,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, '_blank');

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">07</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Get in Touch</span>
      </div>

      <div className="contact-main-grid">
        {/* Left Column: Briefing & Direct Connect Cards */}
        <div className="contact-left-col">
          <h2 className="contact-heading">
            Let's Build Something <br />
            <span className="contact-gradient-text">Intelligent Together.</span>
          </h2>

          <p className="contact-lead-text">
            Whether you are looking to deploy autonomous multi-agent pipelines, build hardened LLM guardrails, or ship a high-performance full-stack web application, I'm ready to collaborate.
          </p>

          <div className="contact-cards-stack">
            {/* Email Copy Card */}
            <div className="connect-card email-card" onClick={handleCopyEmail}>
              <div className="connect-card-icon">
                <Mail size={20} className="text-cyan" />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">Direct Email (Click to Copy)</span>
                <span className="connect-card-value">{contact.email}</span>
              </div>
              <div className="connect-card-action">
                {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-card"
            >
              <div className="connect-card-icon">
                <GithubIcon size={20} className="text-purple" />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">GitHub Profile</span>
                <span className="connect-card-value">@{contact.githubUsername}</span>
              </div>
              <div className="connect-card-action">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-card"
            >
              <div className="connect-card-icon">
                <LinkedinIcon size={20} className="text-cyan" />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">LinkedIn Network</span>
                <span className="connect-card-value">{contact.linkedinName}</span>
              </div>
              <div className="connect-card-action">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form */}
        <div className="contact-right-col">
          <div className="contact-form-card">
            <div className="form-card-header">
              <Sparkles size={18} className="text-cyan" />
              <h4>Send a Direct Transmission</h4>
            </div>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-field-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Alex Turing"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message">Project Brief or Opportunity</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about the project, role, or technical challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary form-submit-btn ${sent ? 'sent' : ''}`}
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    <span>Transmitted to Mail Client!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Transmission</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
