
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const skillsData = [
    {
      title: 'Backend Development',
      type: 'Backend',
      items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Frontend Development',
      type: 'Frontend',
      items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX']
    },
    {
      title: 'Databases',
      type: 'Database',
      items: ['MySQL', 'MongoDB']
    },
    {
      title: 'Development Tools',
      type: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'WordPress', 'XAMPP', 'NPM']
    }
  ];

  const tabs = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

  const filteredSkills =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter(skill => skill.type === activeTab);

  
const experienceData = [
  {
    company: 'Web Riderz',
    role: 'Backend Developer Trainee',
    employment: 'Internship / Trainee',
    duration: 'July 2026 – November 2026',
    status: 'Completed',
    description:
      'Worked on backend development using PHP, WordPress, and Laravel. Converted two static e-commerce websites into dynamic web applications with product management, cart, checkout, order management, and payment gateway integration.',
    tags: ['PHP', 'WordPress', 'Laravel', 'MySQL']
  },
  
{
  company: 'HB Infotech Solutions',
  role: 'Full Stack Developer Trainee / Intern',
  employment: 'Internship',
  duration: '6 Months',
  status: 'Completed',
  description:
    'Completed 6 months of full-stack development training, gaining hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js), along with PHP, Laravel, MySQL, HTML, CSS, JavaScript, REST APIs and database management. Worked on frontend and backend development, authentication, CRUD operations and dynamic web applications.',
  tags: [
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'PHP',
    'Laravel',
    'MySQL',
    'REST APIs'
  ]
}

];


  const projectsData = [
    {
      title: 'Multi-Vendor Marketplace',
      category: 'Backend Development',
      description:
        'A Laravel-based marketplace project focused on vendor and customer workflows, authentication, product management, and category management.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      liveUrl: null,
      githubUrl: null,
      status: 'In Development'
    },
    {
      title: 'College Events Management System',
      category: 'Full-Stack Development',
      description:
        'A web-based event management application featuring student registration, login, email OTP verification, event management, and an administrative dashboard.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://luxmi.hbiscloud.in/',
      githubUrl: 'https://github.com/Luxmi1310/college-events-php',
      status: 'Live'
    },
    {
      title: 'Student Management System',
      category: 'Backend Development',
      description:
        'A Laravel-based application featuring separate admin and student authentication, student and course management, CRUD functionality, and role-based permissions.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Spatie'],
      liveUrl: null,
      githubUrl: null,
      status: 'Project'
    },
    {
      title: 'MERN Inventory Management System',
      category: 'Full-Stack Development',
      description:
        'An inventory management application built with the MERN stack, featuring JWT authentication, user management, CRUD operations, and an administrative dashboard.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: null,
      githubUrl: null,
      status: 'Project'
    }
  ];

  const navigationLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-container">

      {/* Background effects */}
      <div className="glow-sphere sphere-1"></div>
      <div className="glow-sphere sphere-2"></div>

      {/* Navigation */}
      <header className="site-header">
        <nav className="nav-wrapper" aria-label="Main navigation">

          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Luxmi<span>.</span>
          </a>

          <ul
  id="mobile-navigation"
  className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
>
            {navigationLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.linkedin.com/in/luxmi-singh-814978361/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </header>

      <main className="content-layout">

        {/* Hero Section */}
        
<section className="hero-modern" id="home">
  <div className="hero-content">
    <p className="hero-greeting">HELLO, I'M</p>

    <h1>
      A Full-Stack
      <span> Developer.</span>
    </h1>

    <h2>Backend Developer | PHP & Laravel | Full Stack Development</h2>

    <p className="hero-description">
      I build responsive web applications and scalable backend
      solutions using PHP, Laravel, React and modern web technologies.
      I enjoy learning, solving problems and turning ideas into
      practical applications.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="hero-btn primary-btn">
        Explore My Work
      </a>

      <a href="#contact" className="hero-btn secondary-btn">
        Contact Me
      </a>
    </div>

    <div className="hero-tech">
      <span>PHP</span>
      <span>Laravel</span>
      <span>React</span>
      <span>MySQL</span>
      <span>Node.js</span>
    </div>
  </div>

  <div className="hero-image-wrapper">
    <div className="hero-image-glow"></div>
    <img
      src="/profile.png"
      alt="Professional profile"
      className="hero-profile-image"
    />
  </div>
</section>


        {/* About Section */}
        <section id="about" className="content-section">

          <div className="section-title-block">
            <span className="section-index">01 // About Me</span>
            <h2>Turning Ideas Into Applications</h2>
          </div>

          <div className="glass-card about-card">
            <p>
  I am a BCA graduate with practical experience in
  backend and full-stack web development. I have
  worked with PHP, Laravel, WordPress, MySQL and
  modern frontend technologies.
</p>

<p>
  I enjoy building dynamic web applications,
  developing backend functionality, managing
  databases and solving real-world development
  problems. I am continuously improving my skills
  through hands-on projects and learning new technologies.
</p>
          </div>

        </section>

        {/* Experience Section */}
        <section id="experience" className="content-section">

          <div className="section-title-block">
            <span className="section-index">02 // Experience</span>
            <h2>Professional Journey</h2>
          </div>

          <div className="experience-grid">

            {experienceData.map(experience => (
              <article className="premium-project-card experience-card" key={experience.company}>

                <div className="project-meta">
                  <span className="project-number">
                    {experience.status}
                  </span>

                  <h3>{experience.role}</h3>
                  <h4 className="experience-company">{experience.company}</h4>

                  <p>{experience.description}</p>

                  <span className="metric-label experience-type">
                    {experience.employment}
                  </span>
                </div>

                <div className="project-footer">
                  <div className="tag-list">
                    {experience.tags.map(tag => (
                      <span className="meta-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            ))}

          </div>

        </section>

        {/* Skills Section */}
        <section id="skills" className="content-section">

          <div className="section-title-wrapper">

            <div className="section-title-block">
              <span className="section-index">03 // Technical Expertise</span>
              <h2>My Technical Skills</h2>
            </div>

            <div className="filter-tabs" role="group" aria-label="Filter skills">
              {tabs.map(tab => (
                <button
                  type="button"
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={activeTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>

          </div>

          <div className="skills-glass-grid">

            {filteredSkills.map(category => (
              <div className="glass-card skill-group" key={category.title}>

                <div className="card-accent-line"></div>

                <h3>{category.title}</h3>

                <div className="skill-pill-container">
                  {category.items.map(item => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="content-section">

          <div className="section-title-block">
            <span className="section-index">04 // Featured Work</span>
            <h2>Projects I've Worked On</h2>
          </div>

          <div className="projects-flex-layout">

            {projectsData.map((project, index) => (
              <article className="premium-project-card" key={project.title}>

                <div className="project-meta">

                  <span className="project-number">
                   0{index + 1} - {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span className="metric-label project-status">
                    {project.status}
                  </span>

                </div>

                <div className="project-footer">

                  <div className="tag-list">
                    {project.tags.map(tag => (
                      <span className="meta-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions-group">

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-view-link live-link"
                      >
                        Live Demo <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-view-link repo-link"
                      >
                        Source Code <span aria-hidden="true">→</span>
                      </a>
                    )}

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* Achievements Section */}
        <section id="achievements" className="content-section">

          <div className="section-title-block">
            <span className="section-index">05 // Achievements</span>
            <h2>Hackathons & Recognition</h2>
          </div>

          <div className="glass-card achievement-strip">

            <div className="achievement-icon-box" aria-hidden="true">🏆</div>

            <div className="achievement-details">

              <span className="achievement-tag">
                National-Level Hackathon Participation
              </span>

              <h3>Hackathon Experience</h3>

              <p>
                Participated in two national-level hackathons,
                gaining experience in teamwork, collaborative
                development, technical problem-solving, and
                building solutions under time constraints.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* Contact & Footer */}
      <footer id="contact" className="premium-footer">

        <div className="footer-main-grid">

          <div className="footer-left-brand">

            <span className="section-index">06 // Get In Touch</span>

            <h2>Let's Build Something Together.</h2>

            <p>
              I'm always interested in connecting with developers,
              exploring new opportunities, and working on meaningful
              web development projects.
            </p>

          </div>

          <div className="footer-right-links">

            <div className="contact-links-grid">

              <a
                href="mailto:singhluxmi86@gmail.com"
                className="contact-link-card"
              >
                <span className="link-label">Email</span>
                <span className="link-value">
                  singhluxmi86@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/luxmi-singh-814978361/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <span className="link-label">LinkedIn</span>
                <span className="link-value">
                  Connect with me ↗
                </span>
              </a>

              <a
                href="https://github.com/Luxmi1310"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card isolated"
              >
                <span className="link-label">GitHub</span>
                <span className="link-value">
                  github.com/Luxmi1310
                </span>
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom-copyright">
          <p>
            &copy; {new Date().getFullYear()} Luxmi Singh.
            Built with React.
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;
