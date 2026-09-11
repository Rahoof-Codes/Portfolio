import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { Sun, Moon, Terminal, Search, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ darkMode, toggleTheme, onOpenCommand, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Agent Lab', id: 'agent-lab', badge: 'Interactive' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Upcoming', id: 'upcoming' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = ['home', 'agent-lab', 'about', 'skills', 'projects', 'upcoming', 'contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Left: Brand / Logo */}
        <a href="#home" className="nav-logo" onClick={() => setActive('home')}>
          <span className="logo-text">AR</span>
          <span className="logo-pulse" />
          <span className="logo-status-pill">
            <span className="pulse-dot" />
            <span className="status-label">OPEN TO WORK</span>
          </span>
        </a>

        {/* Center: Desktop Links */}
        <div className={`nav-links ${menuOpen ? 'mobile-active' : ''}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link-item ${active === link.id ? 'active' : ''}`}
              onClick={() => {
                setActive(link.id);
                setMenuOpen(false);
              }}
            >
              {link.label}
              {link.badge && <span className="nav-item-badge">{link.badge}</span>}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="nav-actions">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommand}
            className="nav-btn-icon cmd-trigger-btn"
            title="Open Command Palette (Ctrl+K)"
            aria-label="Open Command Palette"
          >
            <Search size={16} />
            <span className="kbd-shortcut">⌘K</span>
          </button>

          {/* Interactive Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            className="nav-btn-icon terminal-trigger-btn"
            title="Open Interactive Terminal"
            aria-label="Open Interactive Terminal"
          >
            <Terminal size={17} />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="nav-btn-icon theme-btn"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={17} className="text-amber" /> : <Moon size={17} />}
          </button>

          {/* Hire Me CTA */}
          <a href={`mailto:${CONFIG.contact.email}`} className="nav-cta-btn">
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

