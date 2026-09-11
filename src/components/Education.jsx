import React from 'react';
import { CONFIG } from '../config';
import { GraduationCap, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const { college, degree, status, focus, highlights } = CONFIG.education;

  return (
    <section className="education-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">06</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Academic Foundations</span>
      </div>

      <div className="education-header">
        <h2 className="section-title">Education & Continuous Learning</h2>
      </div>

      <div className="education-card-container">
        <div className="education-card">
          <div className="education-icon-wrapper">
            <GraduationCap size={32} className="education-cap-icon" />
          </div>

          <div className="education-details">
            <div className="education-meta-row">
              <span className="education-degree-badge">{degree}</span>
              <span className="education-status-pill">
                <Calendar size={13} />
                <span>{status}</span>
              </span>
            </div>

            <h3 className="education-college-name">{college}</h3>

            <div className="education-location">
              <MapPin size={14} className="text-cyan" />
              <span>Oddanchathram, Tamil Nadu, India</span>
            </div>

            <p className="education-focus-summary">
              <strong>Core Specialization:</strong> {focus}
            </p>

            {highlights && (
              <div className="education-highlights-list">
                {highlights.map((h, i) => (
                  <div key={i} className="education-highlight-item">
                    <CheckCircle2 size={15} className="text-emerald" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

