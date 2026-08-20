import './App.css';
import standoutTexture from './assets/standout-experiences.png';
import featherTexture from './assets/feathers.png';
import neutralTexture from './assets/neutral.png';

function App() {
  const featuredProjects = [
    {
      title: 'Nebula Commerce',
      category: 'E-commerce Platform',
      image: standoutTexture,
      imageAlt: 'Textured dark brand background with script typography',
      description:
        'A conversion-focused storefront with custom CMS blocks, lightning-fast product filtering, and analytics dashboards.',
    },
    {
      title: 'Luna Wellness',
      category: 'Brand Website',
      image: featherTexture,
      imageAlt: 'Soft neutral feather texture with warm cream tones',
      description:
        'A mobile-first marketing site with immersive visuals, animated storytelling, and SEO-driven content architecture.',
    },
    {
      title: 'Orbit SaaS Suite',
      category: 'Product Interface',
      image: neutralTexture,
      imageAlt: 'Natural wood texture in warm neutral palette',
      description:
        'A scalable React front-end for a B2B platform with role-based dashboards, reusable design patterns, and onboarding flows.',
    },
  ];

  const services = [
    'Custom Website Design and Development',
    'React Front-end Architecture',
    'Performance Optimization and Core Web Vitals',
    'Landing Pages for Campaigns and Product Launches',
    'Website Maintenance and Iterative Improvements',
  ];

  const process = [
    {
      title: 'Discovery and Direction',
      description:
        'We align on audience, goals, and messaging so every page has purpose.',
    },
    {
      title: 'Design and Build',
      description:
        'I design and develop your website with responsive layouts and clean, scalable code.',
    },
    {
      title: 'Launch and Grow',
      description:
        'After launch, I provide refinements and support to keep your website performing.',
    },
  ];

  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <nav className="top-nav">
          <img
            className="brand-wordmark"
            src="/Celestial Studio Logo Text NBG.png"
            alt="Celestial Studio LLC"
          />
          <div className="nav-links">
            <a href="#work">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-body">
          <div className="hero-overlay hero-overlay-left" aria-hidden="true" />
          <div className="hero-overlay hero-overlay-right" aria-hidden="true" />

          <div
            className="hero-left-feature"
            style={{ backgroundImage: "url('/Celestial Studio Logo Moon NBG.png')" }}
            aria-hidden="true"
          />

          <div className="hero-content">
            <h1>
              Beautiful, strategic websites designed to elevate your brand.
            </h1>
            <p className="hero-copy">
              I create custom web experiences that combine clean code, modern
              interaction design, and storytelling aligned with your vision.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#contact">
                Start a Project
              </a>
              <a className="secondary-cta" href="#work">
                View My Work
              </a>
            </div>
            <p className="micro-note">
              Currently accepting new bookings.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section quote-band" aria-label="Studio philosophy">
          <blockquote className="quote-card">
            <p className="quote-text">
              Listening closely to each client&apos;s wishes is at the center of
              my process, because the strongest websites come from real
              collaboration and a genuine commitment to ultimate satisfaction.
            </p>
          </blockquote>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h2>Recent projects crafted with clarity, elegance, and results.</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                />
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-texture-light" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Services tailored for founders and brands ready to stand out.</h2>
          </div>
          <ul className="service-list">
            {services.map((service, index) => (
              <li key={service}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>A collaborative flow that keeps quality high and timelines clear.</h2>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-overlay" aria-hidden="true" />
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build a web presence that feels distinctly yours.</h2>
          <p>
            Reach out with your timeline, goals, and current website status. I
            typically respond within one business day.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@celestialstudio.dev">hello@celestialstudio.dev</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Celestial Studio. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
