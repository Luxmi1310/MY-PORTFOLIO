import React, { useState } from 'react';
import './App.css';

function App() {
  // UX Optimization: Skill filtering tab state
  const [activeTab, setActiveTab] = useState('All');

  const skillsData = [
    { title: "Frontend Frameworks", type: "Technical", items: ["React", "JavaScript (ES6+)", "HTML5/CSS3", "Bootstrap", "jQuery", "AJAX"] },
    { title: "Backend Environments", type: "Technical", items: ["Express.js", "Node.js", "Laravel", "PHP"] },
    { title: "Database Systems", type: "Technical", items: ["MongoDB", "MySQL"] },
    { title: "CMS & Platforms", type: "Management", items: ["WordPress", "Git", "GitHub", "XAMPP", "NPM"] }
  ];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.type === activeTab);

  const projectsData = [
    {
      title: "College Events Management System",
      description: "A secure, multi-role ecosystem featuring automated email OTP verification and comprehensive admin tools built to streamline institutional workflows.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      liveUrl: "https://luxmi.hbiscloud.in/",
      githubUrl: "https://github.com/Luxmi1310"
    },
    {
      title: "Student Management System",
      description: "Enterprise-grade CRUD system designed with dynamic role permissions, optimized indexing, and fluid user interactions for tracking institutional metrics.",
      tags: ["Laravel", "PHP", "MySQL"],
      liveUrl: "#", 
      githubUrl: "https://github.com/Luxmi1310"
    }
  ];

  return (
    <div className="app-container">
      {/* Background Decorative Glow Ambient Elements */}
      <div className="glow-sphere sphere-1"></div>
      <div className="glow-sphere sphere-2"></div>

      {/* --- PREMIUM NAVBAR --- */}
      <header className="site-header">
        <nav className="nav-wrapper">
          <div className="nav-logo">Luxmi<span>.</span></div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
          </ul>
          <a href="https://www.linkedin.com/in/luxmi-singh-814978361/" target="_blank" rel="noopener noreferrer" className="nav-cta-btn">Connect on LinkedIn</a>
        </nav>
      </header>

      <main className="content-layout">
        {/* --- HERO / INTRO SECTION --- */}
        <section id="about" className="hero-section">
          <div className="hero-content-left">
            <div className="status-badge">
              <span className="pulse-dot"></span> Actively Seeking Full-Time Software Engineering Roles
            </div>
            <h1 className="hero-title">
              Engineering <br />
              High-Performance <span className="gradient-text">Web Apps.</span>
            </h1>
            <p className="hero-subtitle">
              Hi, I'm <strong>Luxmi </strong>. I am a recent BCA graduate accelerating my industry expertise through a part-time Full Stack Development internship at <strong>HB Infotech Solutions</strong>.
            </p>
            <p className="hero-hiring-pitch">
              A veteran of 2 National-Level Hackathons with proven team leadership experience, I build clean frontend render architectures and robust backend services. I am ready to bring agency-tested value to your full-time engineering team.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="action-btn-primary">Explore My Work</a>
              <a href="#experience" className="action-btn-secondary">View Milestones</a>
            </div>
          </div>

          <div className="hero-content-right">
            <div className="interactive-frame">
              <div className="profile-mesh">
                <span className="mesh-initials">LS</span>
              </div>
              <div className="floating-metric">
                <span className="metric-num">BCA Graduate</span>
                <span className="metric-label">Intern @HB Infotech Solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: EXPERIENCE & TIMELINE --- */}
        <section id="experience" className="projects-section">
          <div className="section-title-block" style={{ marginBottom: '40px' }}>
            <span className="section-index">01 // Engineering Experience</span>
            <h2>Professional Ecosystem</h2>
          </div>

          <div className="projects-flex-layout">
            <div className="premium-project-card">
              <div className="project-meta">
                <span className="project-number">Active Role</span>
                <h3>Full Stack Developer Intern — HB Infotech Solutions</h3>
                <p>
                  Contributed to multiple real-world agency projects. Collaborated closely with dev teams to engineer client-facing architectures, custom modules, database optimizations, and versatile WordPress implementations.
                </p>
              </div>
              <div className="project-footer" style={{ borderTop: 'none', paddingTop: '0' }}>
                <div className="tag-list">
                  <span className="meta-tag">Production Code</span>
                  <span className="meta-tag">Agile Lifecycle</span>
                  <span className="meta-tag">WordPress Deployment</span>
                </div>
              </div>
            </div>

            <div className="premium-project-card">
              <div className="project-meta">
                <span className="project-number">Leadership & Strategy</span>
                <h3>Software Developer & Team Lead — Competitive Track</h3>
                <p>
                  Competed at <strong>2 National-Level Hackathons</strong>. Stepped up as absolute Team Lead during my debut hackathon, directing codebase synchronization, microservice architecture design, and timeline management under strict conditions.
                </p>
              </div>
              <div className="project-footer" style={{ borderTop: 'none', paddingTop: '0' }}>
                <div className="tag-list">
                  <span className="meta-tag">Team Leadership</span>
                  <span className="meta-tag">System Design</span>
                  <span className="meta-tag">Rapid Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION (WITH UX TAB FILTER) --- */}
        <section id="skills" className="skills-section">
          <div className="section-title-wrapper">
            <div className="section-title-block">
              <span className="section-index">02 // Expertise</span>
              <h2>Technical Weaponry</h2>
            </div>
            
            <div className="filter-tabs">
              {['All', 'Technical', 'Management'].map((tab) => (
                <button 
                  key={tab} 
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="skills-glass-grid">
            {filteredSkills.map((category, index) => (
              <div className="glass-card skill-group" key={index}>
                <div className="card-accent-line"></div>
                <h3>{category.title}</h3>
                <div className="skill-pill-container">
                  {category.items.map((item, i) => (
                    <span key={i} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="projects-section">
          <div className="section-title-block">
            <span className="section-index">03 // Featured Work</span>
            <h2>Architected Applications</h2>
          </div>

          <div className="projects-flex-layout">
            {projectsData.map((project, index) => (
              <article className="premium-project-card" key={index}>
                <div className="project-meta">
                  <span className="project-number">0{index + 1}.</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="meta-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions-group">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-view-link live-link">
                        Launch Live Application <span className="arrow">↗</span>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-view-link repo-link">
                      Source Code <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- ACHIEVEMENTS SECTION --- */}
        <section id="achievements" className="achievement-section">
          <div className="section-title-block">
            <span className="section-index">04 // Honors</span>
            <h2>Notable Recognition</h2>
          </div>

          <div className="glass-card achievement-strip">
            <div className="achievement-icon-box">🏆</div>
            <div className="achievement-details">
              <span className="achievement-tag">Robo MANAI 2026 // National Level</span>
              <h3>Top 10 Hackathon Position</h3>
              <p>
                Secured a placement in the elite Top 10 competitive teams out of broad nationwide participation, engineering the hardware-software automated mapping for the AMR-ERU project alongside Team Hack Mavericks.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="premium-footer">
        <div className="footer-main-grid">
          <div className="footer-left-brand">
            <h2>Let's build something exceptional together.</h2>
            <p>I am looking for an immediate full-time opportunity where I can contribute to core web architectures, API ecosystems, and dynamic platforms.</p>
          </div>
          <div className="footer-right-links">
            <div className="contact-links-grid">
              <a href="mailto:singhluxmi86@gmail.com" className="contact-link-card">
                <span className="link-label">Direct Email</span>
                <span className="link-value">singhluxmi86@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/luxmi-singh-814978361/" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                <span className="link-label">Professional Network</span>
                <span className="link-value">LinkedIn Profile ↗</span>
              </a>
              <a href="https://github.com/Luxmi1310" target="_blank" rel="noopener noreferrer" className="contact-link-card isolated">
                <span className="link-label">Codebase Matrix</span>
                <span className="link-value">github.com/Luxmi1310</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-copyright">
          <p>&copy; {new Date().getFullYear()} Luxmi Singh. Engineered for scale and structural efficiency.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;