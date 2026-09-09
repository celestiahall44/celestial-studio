import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openContactModal = (event) => {
    event.preventDefault();
    setSubmitStatus(null);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setSubmitStatus(null);
    setIsContactModalOpen(false);
  };

  const handleModalBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeContactModal();
    }
  };

  const handleContactFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);
    const form = event.currentTarget;

    let serviceId = 'service_e0g0bsp';
    let templateId = 'template_zqf6t3r';
    let publicKey = 'PunT1yUjK2-xsBH1z';

    try {
      serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || serviceId;
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || templateId;
      publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || publicKey;
    } catch (error) {
      // Fall back to the defaults above when env access is unavailable.
    }

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send at this time. Please contact (406) 214-7059',
      });
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const details = String(formData.get('details') || '').trim();
    const message = String(formData.get('message') || '').trim();

    setIsSubmittingForm(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          details,
          phone,
          email,
          message,
          to_email: 'celestial.studio406@gmail.com',
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        {
          publicKey,
        }
      );

      form.reset();
      setSubmitStatus({
        type: 'success',
        message: 'Your inquiry was sent successfully! We will be in touch soon!',
      });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send at this time. Please contact (406) 214-7059',
      });
    } finally {
      setIsSubmittingForm(false);
    }
  };

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
              <a className="primary-cta" href="#contact-modal" onClick={openContactModal}>
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
          <a className="primary-cta" href="#contact-modal" onClick={openContactModal}>
            Contact Me
          </a>
        </section>
      </main>

      {isContactModalOpen && (
        <div className="modal-backdrop" role="presentation" onClick={handleModalBackdropClick}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button type="button" className="modal-close-x" onClick={closeContactModal} aria-label="Close modal">
              X
            </button>
            <h2 id="contact-modal-title">Let's Start Your Project</h2>
            <p>
              Share your goals, timeline, and what you want your website to accomplish.
              I'll follow up with next steps and a clear plan.
            </p>
            <form className="contact-form" onSubmit={handleContactFormSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" required />

              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" required />

              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" name="phone" type="tel" required />

              <label htmlFor="contact-details">Project Details</label>
              <input id="contact-details" name="details" type="text" required />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} required />

              <button type="submit" className="primary-cta" disabled={isSubmittingForm}>
                {isSubmittingForm ? 'Sending...' : 'Send Inquiry'}
              </button>

              {submitStatus && (
                <p className={`modal-status modal-status-${submitStatus.type}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </section>
        </div>
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Celestial Studio.</p>
      </footer>
    </div>
  );
}

export default App;
