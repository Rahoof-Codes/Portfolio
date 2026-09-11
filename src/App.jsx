import React, { useState, useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgentSimulator from './components/AgentSimulator';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UpcomingProject from './components/UpcomingProject';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JarvisChatbot from './components/JarvisChatbot';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme_explicit');
    return saved !== null ? saved === 'dark' : true; // Default to dark cyber mode
  });

  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Ctrl+K or Cmd+K: Open Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      // Backtick or Ctrl+`: Open Terminal
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('portfolio_theme_explicit', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Background Particle/Neural Mesh */}
      <NeuralBackground />

      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="portfolio-main-content">
        <Hero />
        <AgentSimulator />
        <About />
        <Skills />
        <Projects />
        <UpcomingProject />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Utilities */}
      <JarvisChatbot />
      <ScrollProgress />

      {/* Modals & Drawers */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />
    </div>
  );
}
