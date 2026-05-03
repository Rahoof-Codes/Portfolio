// app.js — Redesigned components. Edit your info in config.js!

const { useState, useEffect, useRef } = React;

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
function Navbar() {
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
      <a href={`mailto:${CONFIG.contact.email}`} className="nav-cta">Hire Me</a>
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

  return (
    <section id="projects" ref={ref} className={`section projects-section${visible ? ' revealed' : ''}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-num">03</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Projects</span>
      </div>
      <h2 className="section-title">What I've Built</h2>

      <div className="project-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.num} proj={proj} index={i} />
        ))}
      </div>
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
function Contact() {
  const [ref, visible] = useReveal();
  const { contact } = CONFIG;

  const cards = [
    { icon: '✉', label: 'EMAIL',    value: contact.email,        href: `mailto:${contact.email}` },
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
          <a href={`mailto:${contact.email}`} className="btn btn-primary contact-btn">
            Send Me a Message ↗
          </a>
        </div>

        <div className="contact-right">
          {cards.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'}
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
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
