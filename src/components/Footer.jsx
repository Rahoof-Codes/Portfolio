import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { Mail, Radio, Clock, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const { name, contact, telemetry } = CONFIG;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const istTime = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setTime(istTime);
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-container">
      {/* Telemetry Strip */}
      <div className="footer-telemetry-bar">
        <div className="telemetry-unit">
          <Radio size={14} className="text-emerald pulsing-icon" />
          <span className="telemetry-label">Cluster Status:</span>
          <span className="telemetry-val">Operational (ap-south-1)</span>
        </div>

        <div className="telemetry-unit">
          <Clock size={14} className="text-cyan" />
          <span className="telemetry-label">Local Time (IST):</span>
          <span className="telemetry-val">{time || '10:30 PM IST'}</span>
        </div>

        <div className="telemetry-unit">
          <ShieldCheck size={14} className="text-purple" />
          <span className="telemetry-label">Guardrails:</span>
          <span className="telemetry-val">AWS Bedrock Active</span>
        </div>
      </div>

      <div className="footer-main-row">
        <div className="footer-brand-side">
          <div className="footer-logo">
            <span className="logo-ar">AR</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-tagline">
            Designed & Engineered by <strong>{name}</strong>
          </p>
        </div>

        <div className="footer-social-links">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="footer-social-icon"
            title="Direct Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-note">
        <span>© {new Date().getFullYear()} Abdul Rahoof. Built with React & Vite.</span>
      </div>
    </footer>
  );
}
