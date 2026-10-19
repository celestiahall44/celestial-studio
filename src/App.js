import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setIsInitialLoading(false);
    }, 650);

    return () => {
      window.clearTimeout(loaderTimer);
    };
  }, []);

  useEffect(() => {
    if (isInitialLoading) {
      return;
    }

    const revealTargets = document.querySelectorAll(
      '.section, .metric-card, .service-card, .process-card, .pricing-card, .contact, .footer'
    );

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [isInitialLoading]);

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

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (event) => {
    if (isContactModalOpen) {
      event.preventDefault();
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
    {
      title: 'Brand-First Website Design',
      detail:
        'Custom layouts and page systems built around your offer, audience, and positioning.',
    },
    {
      title: 'React Front-End Development',
      detail:
        'Fast, accessible, and maintainable interfaces with clean component architecture.',
    },
    {
      title: 'High-Converting Landing Pages',
      detail:
        'Campaign and launch pages focused on clarity, trust, and conversion momentum.',
    },
    {
      title: 'Ongoing Growth Support',
      detail:
        'Post-launch optimization, content updates, and iterative improvement for better results.',
    },
  ];

  const processSteps = [
    {
      title: 'Discover',
      description:
        'We align on business goals, audience behavior, and messaging priorities.',
    },
    {
      title: 'Design',
      description:
        'I craft visuals, structure, and interactions that feel premium and easy to navigate.',
    },
    {
      title: 'Develop',
      description:
        'I build your site with performance, accessibility, and scalability in mind.',
    },
    {
      title: 'Launch',
      description:
        'We publish confidently, then refine based on real engagement and conversion data.',
    },
  ];

  const metrics = [
    { value: 'Within 3 days', label: 'Response time (business days)' },
    { value: '100%', label: 'Custom build approach' },
    { value: 'Mobile-first', label: 'Design and testing workflow' },
  ];

  const pricingTiers = [
    {
      name: 'Starter Site',
      price: '$1,200',
      timeline: '2-3 weeks',
      bestFor: 'Solo professionals who need a polished one-page web presence fast.',
      exampleSite: 'Single-page pre-launch product waitlist page with product benefits and lead capture.',
      items: [
        'Single page website',
        'Mobile responsive build',
        'Contact form setup',
        'Basic SEO foundations',
        'Post-launch refinement support (free year 1)',
      ],
    },
    {
      name: 'Growth Site',
      price: '$2,400',
      timeline: '3-5 weeks',
      recommendation: 'For most product-selling brands, Growth Site is the best starting package.',
      bestFor: 'Product-based businesses ready to convert visitors into customers with a multi-page site.',
      exampleSite: '5-page product brand site with featured offers, trust proof, FAQs, and strong purchase CTAs.',
      items: [
        'Up to 5 custom pages',
        'Custom visual direction',
        'Conversion-focused page structure',
        'On-page SEO setup',
        'Post-launch refinement support (free year 1)',
      ],
    },
    {
      name: 'Premium Build',
      price: '$4,000+',
      timeline: '5+ weeks',
      bestFor: 'Scaling product brands that need a high-performance custom funnel and launch-ready experience.',
      exampleSite: 'Custom product launch site with campaign landing pages, advanced interactions, and optimization cycles.',
      items: [
        'Advanced custom website',
        'Interactive sections and polish',
        'Performance and accessibility optimization',
        'Post-launch refinement support (free year 1)',
      ],
    },
  ];

  if (isInitialLoading) {
    return (
      <div className="site-loader" role="status" aria-live="polite" aria-label="Loading content">
        <div className="loader-panel">
          <img
            className="loader-logo"
            src="/Celestial Studio Logo Text NBG.png"
            alt="Celestial Studio LLC"
          />
          <p className="loader-copy">Preparing your experience</p>
          <div className="loader-skeleton" aria-hidden="true">
            <span className="skeleton-line skeleton-line-lg" />
            <span className="skeleton-line skeleton-line-md" />
            <span className="skeleton-line skeleton-line-sm" />
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="site-shell">
      <header className="top-bar">
        <a
          href="#top"
          aria-label="Back to top"
          onClick={(event) => {
            handleNavLinkClick(event);
            if (!event.defaultPrevented) {
              handleBackToTop(event);
            }
          }}
          aria-disabled={isContactModalOpen}
          tabIndex={isContactModalOpen ? -1 : undefined}
        >
          <img
            className="brand-wordmark"
            src="/Celestial Studio Logo Text NBG.png"
            alt="Celestial Studio LLC"
          />
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a
            href="#services"
            onClick={handleNavLinkClick}
            aria-disabled={isContactModalOpen}
            tabIndex={isContactModalOpen ? -1 : undefined}
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={handleNavLinkClick}
            aria-disabled={isContactModalOpen}
            tabIndex={isContactModalOpen ? -1 : undefined}
          >
            Pricing
          </a>
          <a
            href="#process"
            onClick={handleNavLinkClick}
            aria-disabled={isContactModalOpen}
            tabIndex={isContactModalOpen ? -1 : undefined}
          >
            Process
          </a>
          <a
            href="#contact-modal"
            onClick={(event) => {
              handleNavLinkClick(event);
              if (!event.defaultPrevented) {
                openContactModal(event);
              }
            }}
            aria-disabled={isContactModalOpen}
            tabIndex={isContactModalOpen ? -1 : undefined}
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy-wrap">
          <p className="eyebrow">For founders and growing brands</p>
          <h1>Professional websites that look exceptional and convert with clarity.</h1>
          <p className="hero-copy">
            Celestial Studio designs and develops custom web experiences that blend premium visuals,
            strong messaging, and fast, accessible code.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#contact-modal" onClick={openContactModal}>
              Book a Discovery Call
            </a>
            <a className="secondary-cta" href="#services">
              View Services
            </a>
          </div>
          <p className="micro-note">Currently accepting new projects.</p>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <img src="/Celestial Studio Logo Moon NBG.png" alt="" />
        </div>
      </section>

      <main>
        <section className="section metrics" aria-label="Studio performance highlights">
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <h2>Services built to strengthen brand trust and business results.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section statement" aria-label="Studio philosophy">
          <blockquote>
            <p>
              Great websites do more than look beautiful. They communicate clearly,
              guide decisions, and create confidence in your brand at every click.
            </p>
          </blockquote>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <h2>A focused process from idea to launch.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <p className="step-count">{String(index + 1).padStart(2, '0')}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading">
            <h2>Pricing breakdown built for different project stages.</h2>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <article className="pricing-card" key={tier.name}>
                <h3>{tier.name}</h3>
                <p className="pricing-amount">{tier.price}</p>
                <p className="pricing-timeline">Typical timeline: {tier.timeline}</p>
                {tier.recommendation && (
                  <p className="pricing-card-note">{tier.recommendation}</p>
                )}
                <p className="pricing-best-for"><strong>Best for:</strong> {tier.bestFor}</p>
                <p className="pricing-example"><strong>Example site:</strong> {tier.exampleSite}</p>
                <ul>
                  {tier.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            All listed package prices are one-time project fees. There is no annual renewal fee for your website, only a $25 domain retention fee.
          </p>
          <p className="pricing-note">
            Post-launch refinement support is included free for the first year. Continued support will be available thereafter at an hourly rate, based on your ongoing needs.
          </p>
        </section>

        <section className="section contact" id="contact">
          <h2>Ready for a website that feels undeniably professional?</h2>
          <p>
            Share your timeline, goals, and offer. You will receive a personalized response
            within 3 business days.
          </p>
          <a className="primary-cta" href="#contact-modal" onClick={openContactModal}>
            Start Your Project
          </a>
        </section>
      </main>

      {isContactModalOpen && (
        <div className="modal-backdrop" role="presentation" onClick={handleModalBackdropClick}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button type="button" className="modal-close-x" onClick={closeContactModal} aria-label="Close modal">
              x
            </button>
            <h2 id="contact-modal-title">Let's Start Your Project</h2>
            <p>
              Share your goals, timeline, and what success looks like.
              I will follow up with recommendations and clear next steps.
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
        <p>© {new Date().getFullYear()} Celestial Studio LLC. Crafted with intention in Montana.</p>
      </footer>
    </div>
  );
}

export default App;
