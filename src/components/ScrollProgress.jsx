import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      }
      setVisible(scrolled > 280);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`scroll-progress-widget ${visible ? 'visible' : ''}`}>
      <svg className="scroll-progress-ring" width="46" height="46">
        <circle
          className="scroll-ring-track"
          cx="23"
          cy="23"
          r={radius}
        />
        <circle
          className="scroll-ring-fill"
          cx="23"
          cy="23"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

