// app.js — React components. Edit your info in config.js instead!

// ===== COMPONENTS =====

function Navbar() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('home');

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {links.map(link => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={active === link.toLowerCase() ? 'active' : ''}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  const { name, title, heroDesc, badge, contact } = CONFIG;
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="badge">
          <span></span> {badge}
        </div>
        <h1 className="gradient-text fade-up delay-1">Hi, I'm {name}</h1>
        <h2 className="fade-up delay-2">{title}</h2>
        <p className="fade-up delay-3">{heroDesc}</p>
        <div className="hero-btns fade-up delay-4">
          <a href={contact.github} target="_blank" className="btn">GitHub Profile</a>
          <a href="#projects" className="btn outline">View Projects</a>
          <a href="#contact" className="btn ghost">Contact Me</a>
        </div>
      </div>
      <div className="scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        scroll
      </div>
    </section>
  );
}

function About() {
  const { name, photo, tagline, bio } = CONFIG;
  return (
    <section id="about" className="section">
      <div className="section-header">
        <p className="section-label">// who am i</p>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-grid">
        <div className="profile-wrap">
          <img src={photo} alt={name} loading="lazy" />
        </div>
        <div>
          <p className="about-tagline">{tagline}</p>
          {bio.map((line, i) => (
            <p key={i} className="about-text" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div style={{ marginTop: '1.5rem' }}>
            <a href="#contact" className="btn" style={{ marginRight: '0.8rem' }}>Hire Me</a>
            <a href="#projects" className="btn outline">My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { skills } = CONFIG;
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <p className="section-label">// what i know</p>
        <h2 className="section-title">Skills & Tools</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className={`skill-card${group.highlight ? ' highlight' : ''}`}>
            <h4>{group.title}</h4>
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

function Projects() {
  const { projects } = CONFIG;
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <p className="section-label">// what i've built</p>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((proj) => (
          <div key={proj.num} className="project-card">
            <p className="project-num">Project {proj.num}</p>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="links">
              <a href={proj.live} target="_blank" className="btn">View Live</a>
              <a href={proj.code} target="_blank" className="btn outline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const { college, degree, focus } = CONFIG.education;
  return (
    <section className="section">
      <div className="section-header">
        <p className="section-label">// my background</p>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="edu-box">
        <h4>{college}</h4>
        <p>{degree}</p>
        <p>{focus}</p>
      </div>
    </section>
  );
}

function Certificates() {
  const { certificates } = CONFIG;
  return (
    <section className="section">
      <div className="section-header">
        <p className="section-label">// achievements</p>
        <h2 className="section-title">Certificates</h2>
      </div>
      <div className="cert-grid">
        {certificates.map(cert => (
          <div key={cert.title} className="cert-card">
            <img src={cert.img} alt={cert.title} loading="lazy" />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { contact } = CONFIG;
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p className="section-label">// let's talk</p>
        <h2 className="section-title">Get in Touch</h2>
        <p style={{ color: 'var(--muted)', marginTop: '0.5rem', fontSize: '1.05rem' }}>
          Have a project idea or just want to say hello? I'm always open to conversations.
        </p>
      </div>
      <div className="contact-cards">
        <a href={`mailto:${contact.email}`} className="contact-card">
          <span className="label">✉ EMAIL</span>
          <span className="value">{contact.email}</span>
        </a>
        <a href={contact.github} target="_blank" className="contact-card">
          <span className="label">⌥ GITHUB</span>
          <span className="value">{contact.githubUsername}</span>
        </a>
        <a href={contact.linkedin} target="_blank" className="contact-card">
          <span className="label">in LINKEDIN</span>
          <span className="value">{contact.linkedinName}</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { name } = CONFIG;
  return (
    <footer>
      <p>
        Designed & Built by <span>{name}</span> · Powered by <span>React</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ===== APP =====
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
