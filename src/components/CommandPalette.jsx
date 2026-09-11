import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import {
  Search,
  Bot,
  Layers,
  Code2,
  FileText,
  Mail,
  Moon,
  Sun,
  Terminal,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CommandPalette({ isOpen, onClose, toggleTheme, darkMode, onOpenTerminal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    // Navigation
    { id: 'nav-agent', label: 'Go to Interactive Agent Lab', category: 'Navigation', icon: Bot, action: () => { window.location.hash = '#agent-lab'; onClose(); } },
    { id: 'nav-projects', label: 'Go to Projects Gallery', category: 'Navigation', icon: Layers, action: () => { window.location.hash = '#projects'; onClose(); } },
    { id: 'nav-skills', label: 'Go to Skills & Arsenal', category: 'Navigation', icon: Code2, action: () => { window.location.hash = '#skills'; onClose(); } },
    { id: 'nav-upcoming', label: 'Go to Flagship WIP Platform', category: 'Navigation', icon: Sparkles, action: () => { window.location.hash = '#upcoming'; onClose(); } },
    { id: 'nav-about', label: 'Go to About Me', category: 'Navigation', icon: Sparkles, action: () => { window.location.hash = '#about'; onClose(); } },
    { id: 'nav-contact', label: 'Go to Contact', category: 'Navigation', icon: Mail, action: () => { window.location.hash = '#contact'; onClose(); } },

    // Projects
    ...CONFIG.projects.map((p) => ({
      id: `proj-${p.num}`,
      label: `Project: ${p.title}`,
      category: 'Projects',
      icon: Layers,
      action: () => {
        if (p.live) window.open(p.live, '_blank');
        else if (p.code) window.open(p.code, '_blank');
        onClose();
      }
    })),

    // Quick Tools & Actions
    {
      id: 'act-resume',
      label: 'Download Resume (DOCX)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        const link = document.createElement('a');
        link.href = CONFIG.resumePath;
        link.download = 'Abdul_Rahoof_Resume.docx';
        link.click();
        onClose();
      }
    },
    {
      id: 'act-email',
      label: `Copy Direct Email (${CONFIG.contact.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(CONFIG.contact.email);
        confetti({ particleCount: 40, spread: 50 });
        onClose();
      }
    },
    {
      id: 'act-terminal',
      label: 'Open Interactive Terminal (>_)',
      category: 'Actions',
      icon: Terminal,
      action: () => {
        onClose();
        if (onOpenTerminal) onOpenTerminal();
      }
    },
    {
      id: 'act-theme',
      label: `Switch Theme to ${darkMode ? 'Light' : 'Dark'} Mode`,
      category: 'Actions',
      icon: darkMode ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Search Bar */}
        <div className="command-search-header">
          <Search size={18} className="command-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-search-input"
            placeholder="Search sections, projects, or type an action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="command-close-icon" onClick={onClose} aria-label="Close Command Palette">
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="command-results-list">
          {filteredActions.length === 0 ? (
            <div className="command-no-results">
              <p>No matching commands found for "{query}"</p>
            </div>
          ) : (
            filteredActions.map((item, index) => {
              const IconComp = item.icon;
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  className={`command-item-row ${isSelected ? 'selected' : ''}`}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="item-icon-box">
                    <IconComp size={16} />
                  </div>
                  <div className="item-details">
                    <span className="item-title">{item.label}</span>
                    <span className="item-category-tag">{item.category}</span>
                  </div>
                  {isSelected && <ArrowRight size={14} className="item-enter-icon" />}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="command-footer-hints">
          <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to select</span>
          <span><kbd>esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}

