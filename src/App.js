import './App.css';

function App() {
  const services = [
    'Custom Website Design and Development',
    'React Front-end Architecture',
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
            <a href="#work">Values</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-body">
          <div className="hero-overlay hero-overlay-left" aria-hidden="true" />
          <div
            className="hero-overlay hero-overlay-right"
            style={{ backgroundImage: "url('/Standout Experiences.png')" }}
            aria-hidden="true"
          />

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
              I create custom web experiences that combine clean code,
              <br />
              modern interaction design, and storytelling
              <br />
              aligned with your vision.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#contact">
                Start a Project
              </a>
            </div>
            <p className="micro-note">
              Currently accepting new bookings.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section quote-band quote-band-alt quote-band-tan" aria-label="Studio philosophy">
          <blockquote className="quote-card quote-card-alt">
            <p className="quote-text quote-text-alt">
              Listening closely to each client's wishes is at the center of
              my process, 
              <br />
              because the strongest websites come from real
              collaboration and a genuine 
              <br />
              commitment to ultimate satisfaction.
            </p>
          </blockquote>
        </section>

        <section
          className="section values-section"
          id="work"
          style={{ backgroundImage: "url('/Neutral.png')" }}
        >
          <div className="section-heading">
            <h1>The principles that guide every client project I build.</h1>
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

        <section className="section quote-band quote-band-alt quote-band-secondary quote-band-secondary-warm" aria-label="Client partnership">
          <blockquote className="quote-card quote-card-alt">
            <p className="quote-text quote-text-alt">
              Every successful project begins with trust and clear communication.
              <br />
              I prioritize listening first, aligning with your vision, and
              delivering work 
              <br />
              that feels deeply personalized to your goals.
            </p>
          </blockquote>
        </section>

        <section className="section section-texture-light" id="services">
          <div className="section-heading">
            <h1>Services tailored for founders and brands ready to stand out.</h1>
          </div>
          <div className="process-grid">
            {services.map((service, index) => (
              <article className="process-card" key={service}>
                <p>
                  <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                  {service}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section quote-band quote-band-alt quote-band-secondary quote-band-right" aria-label="Studio promise">
          <blockquote className="quote-card quote-card-alt">
            <p className="quote-text quote-text-alt">
              True satisfaction is the goal,
              <br />
              with results that feel aligned, personal, and lasting.
            </p>
          </blockquote>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-overlay" aria-hidden="true" />
          <h1>Let's build a web presence that feels distinctly yours.</h1>
          <p>
            Reach out with your timeline, goals, and current website status. 
            <br />
            I typically respond within one business day.
          </p>
          <a className="primary-cta" href="mailto:hello@celestialstudio.dev">
            Contact Me
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Celestial Studio.</p>
      </footer>
    </div>
  );
}

export default App;
