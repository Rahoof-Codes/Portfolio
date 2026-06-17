import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from './config';

/* ── Utility: use intersection observer for scroll reveals ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ══════════════════════════════
   NAVBAR
══════════════════════════════ */
function Navbar({ darkMode, toggleTheme }) {
  const links = ['Home','About','Skills','Projects','Upcoming','Contact'];
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['home','about','skills','projects','upcoming','contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-logo">
        AR<span className="logo-dot">.</span>
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
             className={active === l.toLowerCase() ? 'active' : ''}>
            {l}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <a href={`mailto:${CONFIG.contact.email}`} className="nav-cta">Hire Me</a>
      </div>
    </nav>
  );
}

/* ══════════════════════════════
   HERO
══════════════════════════════ */
function Hero() {
  const { name, title, heroDesc, badge, contact } = CONFIG;
  const first = name.split(' ')[0];
  const last  = name.split(' ')[1];

  return (
    <section id="home" className="hero">
      <div className="hero-noise" />
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="badge fade-up delay-1">
            <span className="badge-dot" /> {badge}
          </div>

          <h1 className="hero-name fade-up delay-2">
            <span className="name-first">{first}</span>
            <span className="name-last">{last}</span>
          </h1>

          <div className="hero-role fade-up delay-3">
            <span className="role-bar" />
            <span>{title}</span>
          </div>

          <p className="hero-desc fade-up delay-4">{heroDesc}</p>

          <div className="hero-btns fade-up delay-5">
            <a href="#projects" className="btn btn-primary">View Projects ↗</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-right fade-up delay-3">
          <div className="avatar-frame">
            <img src={CONFIG.photo} alt={name} className="avatar-img" />
            <div className="avatar-ring" />
            <div className="avatar-blob" />
          </div>
          <div className="hero-chips">
            <div className="chip chip-1">🌐 Web Dev</div>
            <div className="chip chip-2">   ⚛️ React</div>
            <div className="chip chip-3"> 📱 Mobile-First</div>
  
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   ABOUT
══════════════════════════════ */
function About() {
  const [ref, visible] = useReveal();
  const { name, photo2, tagline, bio } = CONFIG;

  return (
    <section id="about" ref={ref} className={`section about-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">01</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">About Me</span>
      </div>

      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <img src={photo2} alt={name} />
            <div className="about-photo-accent" />
          </div>
          <div className="about-stat-row">
            <div className="about-stat"><span className="stat-n">2+</span><span className="stat-l">Years<br/>Learning</span></div>
            <div className="about-stat"><span className="stat-n">5+</span><span className="stat-l">Projects<br/>Built</span></div>
            <div className="about-stat"><span className="stat-n">3+</span><span className="stat-l">Happy<br/>Clients</span></div>
          </div>
        </div>

        <div className="about-text-col">
          <h2 className="section-title">Who am I?</h2>
          <p className="about-tagline">{tagline}</p>
          {bio.map((line, i) => (
            <p key={i} className="about-body" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div className="about-detail-grid">
            <div className="detail-pill"><span>📍</span> Tamil Nadu, India</div>
            <div className="detail-pill"><span>🎓</span> BCA Student</div>
            <div className="detail-pill"><span>💼</span> Open to Freelance</div>
            <div className="detail-pill"><span>⚡</span> Full Stack Path</div>
          </div>
          <div className="about-btns">
            <a href="#contact" className="btn btn-primary">Hire Me ↗</a>
            <a href="#projects" className="btn btn-outline">My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   ASK J.A.R.V.I.S CHATBOT & SCROLL PROGRESS
══════════════════════════════ */
const JARVIS_QA = [
  {
    question: "Who is Abdul Rahoof?",
    answer: "Abdul Rahoof is a Full Stack Developer and BCA student from Tamil Nadu. He specializes in React, Node.js, Java, and JavaScript, building digital solutions for shops, clients, and schools."
  },
  {
    question: "Is Abdul open for freelance work?",
    answer: "Yes! Abdul is currently open to freelancing & collaboration. You can hire him to build web apps, POS systems, or custom client portals. Contact him at rahoof.codes@gmail.com."
  },
  {
    question: "What is his biggest upcoming project?",
    answer: "That would be me, J.A.R.V.I.S! A self-hosted, offline AI assistant running Gemma 4 (4B parameters) locally for speech capture and text-to-speech, completely private and secure."
  },
  {
    question: "Show me his top project.",
    answer: "His featured project is 'ClientOS — CRM', a full-stack Client Management System built with React, Supabase, and Tailwind CSS 4, supporting role-based access, invoices, and payment tracking."
  }
];

const JarvisChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'jarvis', text: "Hello! I am J.A.R.V.I.S, Abdul's virtual assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;
    
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I am J.A.R.V.I.S, Abdul's assistant. Try asking me about his skills, projects, education, or freelance availability!";
      const query = textToSend.toLowerCase();

      if (query.includes('who') || query.includes('abdul') || query.includes('rahoof')) {
        reply = "Abdul Rahoof is an aspiring Full Stack Developer and BCA student from Tamil Nadu. He loves building responsive web apps with React, Tailwind CSS, and Node.js.";
      } else if (query.includes('hire') || query.includes('freelance') || query.includes('work') || query.includes('open')) {
        reply = "Yes, Abdul is open to freelancing, internships, and collaborations! You can contact him directly at rahoof.codes@gmail.com.";
      } else if (query.includes('skills') || query.includes('know') || query.includes('languages') || query.includes('tech')) {
        reply = "Abdul's core skills include React, JavaScript, HTML5/CSS3, Node.js, Express, Java, PostgreSQL, and Git/GitHub.";
      } else if (query.includes('project') || query.includes('built') || query.includes('work')) {
        reply = "Abdul has built ClientOS (CRM), LexDesk (advocate suite), AI Chatbots, Tea Hub POS Billing, and Modern-Mart Textile. Check them out in the Projects section!";
      } else if (query.includes('study') || query.includes('college') || query.includes('bca') || query.includes('education')) {
        reply = "Abdul is pursuing a Bachelor of Computer Applications (BCA) at Government Arts and Science College in Oddanchathram, Tamil Nadu.";
      } else if (query.includes('jarvis')) {
        reply = "I'm named after J.A.R.V.I.S (Abdul's upcoming voice-controlled local AI assistant project), running Gemma 4 offline on CPU/GPU!";
      }

      setMessages(prev => [...prev, { sender: 'jarvis', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleChipClick = (question, answer) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'jarvis', text: answer }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="jarvis-chatbot">
      <button className="jarvis-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Chat with Jarvis">
        {isOpen ? '❌' : '🤖'}
      </button>

      <div className={`jarvis-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="jarvis-chat-header">
          <div className="jarvis-header-info">
            <div className="jarvis-avatar">
              ⚡
              <div className="jarvis-avatar-dot" />
            </div>
            <div className="jarvis-header-text">
              <h5>J.A.R.V.I.S</h5>
              <span>Assistant • Online</span>
            </div>
          </div>
          <button className="jarvis-close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="jarvis-chat-messages">
          {messages.map((m, idx) => (
            <div key={idx} className={`jarvis-msg ${m.sender}`}>
              {m.text}
            </div>
          ))}
          {isTyping && (
            <div className="jarvis-msg jarvis" style={{ display: 'flex', gap: '4px', padding: '12px 16px' }}>
              <span className="dot" style={{ animation: 'pulse-dot 1.2s infinite', animationDelay: '0s' }}>•</span>
              <span className="dot" style={{ animation: 'pulse-dot 1.2s infinite', animationDelay: '0.2s' }}>•</span>
              <span className="dot" style={{ animation: 'pulse-dot 1.2s infinite', animationDelay: '0.4s' }}>•</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="jarvis-chat-chips">
          {JARVIS_QA.map((qa, idx) => (
            <button key={idx} className="jarvis-chip" onClick={() => handleChipClick(qa.question, qa.answer)}>
              {qa.question}
            </button>
          ))}
        </div>

        <form className="jarvis-chat-input-area" onSubmit={(e) => { e.preventDefault(); handleSend(input); }}>
          <input 
            type="text" 
            placeholder="Type a question..." 
            className="jarvis-chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <button type="submit" className="jarvis-send-btn" disabled={isTyping}>
            ➔
          </button>
        </form>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      }
      
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`scroll-to-top-wrap ${visible ? 'visible' : ''}`}>
      <svg className="scroll-progress-svg">
        <circle className="scroll-progress-bg" cx="24" cy="24" r={radius} />
        <circle 
          className="scroll-progress-bar" 
          cx="24" 
          cy="24" 
          r={radius} 
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
      </svg>
      <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
    </div>
  );
};

/* ══════════════════════════════
   SKILLS
══════════════════════════════ */
function Skills() {
  const [ref, visible] = useReveal();
  const { skills } = CONFIG;

  return (
    <section id="skills" ref={ref} className={`section skills-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">02</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Skills & Tools</span>
      </div>
      <h2 className="section-title">What I Know</h2>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={group.title} className={`skill-card${group.highlight ? ' skill-highlight' : ''}`}
               style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="skill-card-top">
              <span className="skill-icon">{group.icon}</span>
              <h4>{group.title}</h4>
            </div>
            <div className="tags">
              {group.tags.map(tag => (
                <span key={tag} className={`tag${group.learning ? ' learning' : ''}`}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════
   PROJECT CARD (with character hover/touch effect)
══════════════════════════════ */
function ProjectCard({ proj, index }) {
  const [active, setActive] = useState(false);
  let touchTimer = null;

  function handleTouchStart() {
    setActive(true);
  }
  function handleTouchEnd() {
    // Keep active briefly so user can see the effect, then dismiss
    touchTimer = setTimeout(() => setActive(false), 900);
  }

  return (
    <div
      className={`project-card${active ? ' is-active' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {proj.image && (
        <div className="project-banner-wrap">
          <img src={proj.image} alt={proj.title} className="project-banner" loading="lazy"
            onError={e => { e.currentTarget.parentElement.style.display='none'; }} />
          <div className="project-banner-overlay" />
          {proj.character && (
            <span className="card-character" aria-hidden="true">{proj.character}</span>
          )}
        </div>
      )}
      <div className="project-card-header">
        <span className="project-num">Project {proj.num}</span>
        <div className="project-links-row">
          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="icon-btn" title="Live">↗</a>
          <a href={proj.code} target="_blank" rel="noopener noreferrer" className="icon-btn" title="Code">⌥</a>
        </div>
      </div>
      <h3 className="project-title">{proj.title}</h3>
      <p className="project-desc">{proj.desc}</p>
      <div className="tech-stack">
        {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-ctas">
        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo ↗</a>
        <a href={proj.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">GitHub</a>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   PROJECTS
══════════════════════════════ */
function Projects() {
  const [ref, visible] = useReveal();
  const { projects } = CONFIG;
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(proj => {
    const matchesSearch = proj.title.toLowerCase().includes(search.toLowerCase()) ||
                          proj.desc.toLowerCase().includes(search.toLowerCase()) ||
                          proj.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));

    if (!matchesSearch) return false;
    if (filter === 'all') return true;

    const title = proj.title.toLowerCase();
    const techStr = proj.tech.join(' ').toLowerCase();

    if (filter === 'fullstack') {
      return techStr.includes('supabase') || techStr.includes('node.js') || techStr.includes('next.js') || techStr.includes('firebase') || techStr.includes('postgresql');
    }
    if (filter === 'frontend') {
      const isFullStack = techStr.includes('supabase') || techStr.includes('node.js') || techStr.includes('next.js') || techStr.includes('firebase') || techStr.includes('postgresql');
      const isTool = title.includes('billing') || title.includes('pos') || techStr.includes('localstorage');
      return !isFullStack && !isTool;
    }
    if (filter === 'tools') {
      return title.includes('billing') || title.includes('crm') || techStr.includes('localstorage') || title.includes('system');
    }
    return true;
  });

  return (
    <section id="projects" ref={ref} className={`section projects-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">03</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Projects</span>
      </div>
      <h2 className="section-title">What I've Built</h2>

      <div className="projects-header-controls">
        <div className="projects-filter-pills">
          <button className={`filter-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-pill ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => setFilter('fullstack')}>Full Stack</button>
          <button className={`filter-pill ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={`filter-pill ${filter === 'tools' ? 'active' : ''}`} onClick={() => setFilter('tools')}>Tools & POS</button>
        </div>
        <div className="projects-search-box">
          <span className="projects-search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search projects or tech..." 
            className="projects-search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((proj, i) => (
          <ProjectCard key={proj.num} proj={proj} index={i} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No projects found matching your search.</p>
          <button className="btn btn-outline btn-sm" onClick={() => { setSearch(''); setFilter('all'); }}>Reset Filters</button>
        </div>
      )}
    </section>
  );
}

/* ══════════════════════════════
   EDUCATION
══════════════════════════════ */
function Education() {
  const [ref, visible] = useReveal();
  const { college, degree, focus } = CONFIG.education;

  return (
    <section ref={ref} className={`section edu-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">04</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Education</span>
      </div>
      <h2 className="section-title">My Background</h2>

      <div className="edu-card">
        <div className="edu-icon">🎓</div>
        <div className="edu-body">
          <h4>{college}</h4>
          <p className="edu-degree">{degree}</p>
          <p className="edu-focus">{focus}</p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   CONTACT
══════════════════════════════ */
function Contact({ onCopyEmail }) {
  const [ref, visible] = useReveal();
  const { contact } = CONFIG;

  const handleCardClick = (e, isEmail) => {
    if (isEmail) {
      e.preventDefault();
      onCopyEmail();
    }
  };

  const cards = [
    { icon: '✉', label: 'EMAIL (CLICK TO COPY)', value: contact.email, href: `mailto:${contact.email}`, isEmail: true },
    { icon: '⌥', label: 'GITHUB',   value: contact.githubUsername, href: contact.github },
    { icon: 'in', label: 'LINKEDIN', value: contact.linkedinName,  href: contact.linkedin },
  ];

  return (
    <section id="contact" ref={ref} className={`section contact-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">06</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Get in Touch</span>
      </div>

      <div className="contact-inner">
        <div className="contact-left">
          <h2 className="section-title contact-title">Let's Work<br/>Together.</h2>
          <p className="contact-desc">Have a project idea or just want to say hello? I'm always open to conversations and new opportunities.</p>
          <a href={`mailto:${contact.email}`} className="btn btn-primary contact-btn" onClick={(e) => handleCardClick(e, true)}>
            Send Me a Message ↗
          </a>
        </div>

        <div className="contact-right">
          {cards.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'}
               onClick={(e) => handleCardClick(e, c.isEmail)}
               rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">{c.icon}</div>
              <div>
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value">{c.value}</div>
              </div>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   FOOTER
══════════════════════════════ */
function Footer() {
  const { name, contact } = CONFIG;
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-logo">AR<span>.</span></span>
        <p>Designed & Built by <strong>{name}</strong> · {new Date().getFullYear()}</p>
        <div className="footer-links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════
   UPCOMING PROJECTS
══════════════════════════════ */
function UpcomingProjects() {
  const [ref, visible] = useReveal();
  const { wip } = CONFIG;

  return (
    <section id="upcoming" ref={ref} className={`section upcoming-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">05</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Upcoming Projects</span>
      </div>
      <h2 className="section-title">What's Coming Next</h2>

      {/* JARVIS full-width hero card */}
      <div className="upcoming-jarvis-card">

        {/* BG image */}
        <div className="ujc-bg">
          <img src="images/jarvis.jpg" alt="JARVIS AI" className="ujc-bg-img" />
          <div className="ujc-overlay" />
          <div className="ujc-scanlines" />
          {/* Floating glow orb */}
          <div className="ujc-glow-orb" />
        </div>

        {/* Content */}
        <div className="ujc-content">

          {/* Left */}
          <div className="ujc-left">
            <div className="ujc-badges">
              <span className="ujc-status-badge">
                <span className="ujc-pulse" /> {wip.status}
              </span>
              <span className="ujc-pct-badge">{wip.progress}% Done</span>
            </div>

            <h2 className="ujc-name">{wip.name}</h2>
            <p className="ujc-tagline">{wip.tagline}</p>
            <p className="ujc-desc">{wip.description}</p>

            <div className="ujc-tech-list">
              {wip.tech.map(t => <span key={t} className="ujc-tech-tag">{t}</span>)}
            </div>

            <a href={wip.github} target="_blank" rel="noopener noreferrer" className="ujc-btn">
              Follow on GitHub ↗
            </a>
          </div>

          {/* Right */}
          <div className="ujc-right">
            {/* Progress card */}
            <div className="ujc-glass-card">
              <div className="ujc-progress-header">
                <span className="ujc-progress-label">Build Progress</span>
                <span className="ujc-progress-pct">{wip.progress}%</span>
              </div>
              <div className="ujc-track">
                <div className="ujc-bar" style={{ width: `${wip.progress}%` }} />
              </div>
              <div className="ujc-steps">
                {['Architecture','Local LLM','Voice I/O','Mobile App','Cloud Deploy'].map((s, idx) => (
                  <div key={s} className={`ujc-step${idx * 20 < wip.progress ? ' done' : ''}`}>
                    <div className="ujc-step-dot" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature cards */}
            <div className="ujc-features">
              {wip.features.map((f, i) => (
                <div key={i} className="ujc-feature">
                  <span className="ujc-feature-icon">{f.icon}</span>
                  <div>
                    <div className="ujc-feature-title">{f.title}</div>
                    <div className="ujc-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   APP
══════════════════════════════ */
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [copyStatus, setCopyStatus] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.contact.email).then(() => {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    });
  };

  return (
    <React.Fragment>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <UpcomingProjects />
      <Contact onCopyEmail={handleCopyEmail} />
      <Footer />

      <JarvisChatbot />
      <ScrollToTop />
      
      <div className={`copy-tooltip ${copyStatus ? 'visible' : ''}`}>
        <span>✉️ Email copied to clipboard!</span>
      </div>
    </React.Fragment>
  );
}

export default App;
