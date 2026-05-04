import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Sonora Stone</title>
          <meta property="og:title" content="Sonora Stone" />
          <link rel="canonical" href="https://sonora-stone.vercel.app/" />
          <meta property="og:url" content="https://sonora-stone.vercel.app/" />
        </Head>
        <Navigation></Navigation>
        <section className="editorial-hero">
          <div className="editorial-hero-container">
            <div className="hero-centerpiece-card">
              <img
                alt="The Obsidian Suite - Luxury modern kitchen with custom dark cabinetry"
                src="https://images.pexels.com/photos/6264414/pexels-photo-6264414.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="hero-centerpiece-image"
              />
              <div className="hero-centerpiece-overlay">
                <div className="editorial-hero-content">
                  <div className="editorial-hero-trust-row">
                    <span className="editorial-hero-metric">
                      Crafted by Miguel
                    </span>
                    <div className="editorial-hero-divider"></div>
                    <span className="editorial-hero-metric">
                      Arizona&apos;s Premier Custom Studio
                    </span>
                  </div>
                  <h1 className="hero-title hero-title-logo">
                    <img
                      src="/sonora-stone-logo.png"
                      alt="Sonora Stone — Stone Installation"
                      className="hero-brand-logo-img"
                      width={720}
                      height={260}
                    />
                  </h1>
                  <div className="editorial-hero-actions hero-cta-row">
                    <a
                      href="#contact"
                      className="navigation-anchor hero-cta-anchor"
                    >
                      <button
                        id="hero-book-btn"
                        type="button"
                        className="btn-lg btn hero-cta-gold-btn"
                      >
                        Book Consult
                      </button>
                    </a>
                    <a
                      href="#gallery"
                      className="navigation-anchor hero-cta-anchor"
                    >
                      <button type="button" className="btn-lg btn hero-cta-gold-btn">
                        Gallery
                      </button>
                    </a>
                    <a
                      href="#services"
                      className="navigation-anchor hero-cta-anchor"
                    >
                      <button
                        type="button"
                        className="btn-lg btn hero-cta-gold-btn"
                      >
                        Services
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="editorial-spread">
          <div className="editorial-spread-container">
            <div className="editorial-spread-header">
              <h2 className="section-title services-section-title">Services</h2>
            </div>
            <div className="editorial-spread-grid">
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Exterior chimney and patio clad in light custom stone veneer with arched windows and porch"
                    src="/services-stone-chimney.jpg"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">Custom Stone Veneer Work</h3>
                </div>
              </div>
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Modern floor-to-ceiling light stone veneer fireplace with dark wood mantel and built-in shelving"
                    src="/services-stone-fireplace.jpg"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">
                    Indoor Stone Veneer Fireplace
                  </h3>
                </div>
              </div>
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Residential entry with dark ledger stone columns and arch, light stone veneer walls, and glass front door"
                    src="/services-stone-archway.jpg"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">
                    Stone veneer, pillars, and archways
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="portfolio-grid">
          <div className="portfolio-grid-container">
            <div className="portfolio-header">
              <h2 className="section-title">
                Masterpieces in Stone &amp; Wood
              </h2>
            </div>
            <div className="portfolio-masonry">
              <div className="portfolio-item">
                <img
                  alt="Project Alpha"
                  src="https://images.pexels.com/photos/32277993/pexels-photo-32277993.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">The Nordic Bath</h4>
                  <p className="portfolio-item-meta">
                    Phoenix • Artificial Rock
                  </p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Beta"
                  src="https://images.pexels.com/photos/11701125/pexels-photo-11701125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Azure Kitchen</h4>
                  <p className="portfolio-item-meta">Mesa • Custom Oak</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Gamma"
                  src="https://images.pexels.com/photos/6636303/pexels-photo-6636303.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Minimalist Loft</h4>
                  <p className="portfolio-item-meta">Tempe • White Quartz</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Delta"
                  src="https://images.pexels.com/photos/15743384/pexels-photo-15743384.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Gilded Vanity</h4>
                  <p className="portfolio-item-meta">
                    Paradise Valley • Granite
                  </p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Epsilon"
                  src="https://images.pexels.com/photos/5252536/pexels-photo-5252536.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Monolith Island</h4>
                  <p className="portfolio-item-meta">Chandler • Dark Quartz</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Zeta"
                  src="https://images.pexels.com/photos/34081555/pexels-photo-34081555.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Classic Estate</h4>
                  <p className="portfolio-item-meta">Gilbert • Custom Walnut</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">Client Perspectives</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Our backyard patio walls are exactly what we pictured—
                  custom stone veneer that holds up to Arizona sun without
                  looking heavy.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Julianna Vance</span>
                  <span className="author-location">Paradise Valley</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;The indoor fireplace surround Miguel built is the room
                  everyone gathers around—the stone veneer work is immaculate.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Marcus Chen</span>
                  <span className="author-location">Scottsdale</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;New stone columns and an archway at our entryway changed
                  the whole feel of our home—we get compliments every week.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Sarah Miller</span>
                  <span className="author-location">Phoenix</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;We wanted something one-of-a-kind for our outdoor living
                  area—the custom stonework ties the whole patio together.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">David L.</span>
                  <span className="author-location">Gilbert</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="lead-gen">
          <div className="lead-gen-container">
            <div className="lead-gen-split">
              <div className="lead-gen-info">
                <h2 className="section-title">Start Your Bespoke Journey</h2>
                <p className="section-content">
                  Every masterpiece begins with a conversation. Let&apos;s
                  discuss your vision for a space that is uniquely yours.
                </p>
                <div className="lead-gen-direct">
                  <span className="direct-label">
                    Talk to Miguel directly at
                  </span>
                  <a href="tel:+16022459081">
                    <div className="direct-phone">
                      <span>(602) 245-9081</span>
                    </div>
                  </a>
                </div>
                <div className="lead-gen-features">
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>No Templates</span>
                  </div>
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Hand-Selected Materials</span>
                  </div>
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bespoke Design</span>
                  </div>
                </div>
              </div>
              <div className="lead-gen-form-wrapper">
                <form
                  id="consult-form"
                  action="#"
                  method="POST"
                  className="wizard-form"
                >
                  <div className="wizard-progress">
                    <span className="wizard-progress-step active" data-progress="1"></span>
                    <span className="wizard-progress-step" data-progress="2"></span>
                    <span className="wizard-progress-step" data-progress="3"></span>
                    <span className="wizard-progress-step" data-progress="4"></span>
                    <span className="wizard-progress-step" data-progress="5"></span>
                  </div>

                  <div data-step="1" className="active wizard-step">
                    <h3 className="section-subtitle">What are we building?</h3>
                    <p className="wizard-helper">Choose one to begin.</p>
                    <div className="form-options-grid form-options-services">
                      <label className="option-card auto-advance">
                        <input
                          type="radio"
                          name="project_type"
                          value="stone-veneer-back-patios"
                        />
                        <span className="option-content">
                          Custom stone veneer work
                        </span>
                      </label>
                      <label className="option-card auto-advance">
                        <input
                          type="radio"
                          name="project_type"
                          value="stone-veneer-fireplace"
                        />
                        <span className="option-content">
                          Indoor stone veneer fireplace
                        </span>
                      </label>
                      <label className="option-card auto-advance">
                        <input
                          type="radio"
                          name="project_type"
                          value="stone-veneer-pillars-archways"
                        />
                        <span className="option-content">
                          Stone veneer pillars and archways
                        </span>
                      </label>
                    </div>
                  </div>

                  <div data-step="2" className="wizard-step">
                    <h3 className="section-subtitle">Preferred Materials</h3>
                    <p className="wizard-helper">Select all that apply.</p>
                    <div className="form-options-grid">
                      <label className="option-card">
                        <input
                          type="checkbox"
                          name="materials"
                          value="quartz"
                        />
                        <span className="option-content">Quartz</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="checkbox"
                          name="materials"
                          value="granite"
                        />
                        <span className="option-content">Granite</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="checkbox"
                          name="materials"
                          value="rock"
                        />
                        <span className="option-content">Artificial Rock</span>
                      </label>
                    </div>
                    <div className="wizard-actions">
                      <button
                        type="button"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="next-step btn-primary btn"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>

                  <div data-step="3" className="wizard-step">
                    <h3 className="section-subtitle">Project Timeline</h3>
                    <p className="wizard-helper">When are you hoping to begin?</p>
                    <div className="form-options-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          name="timeline"
                          value="asap"
                          required="true"
                        />
                        <span className="option-content">ASAP</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="timeline"
                          value="1-3-months"
                        />
                        <span className="option-content">1 – 3 Months</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="timeline"
                          value="3-6-months"
                        />
                        <span className="option-content">3 – 6 Months</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="timeline"
                          value="quote-only"
                        />
                        <span className="option-content">Just A Quote</span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="timeline"
                          value="browsing"
                        />
                        <span className="option-content">Just Browsing</span>
                      </label>
                    </div>
                    <div className="wizard-actions">
                      <button
                        type="button"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="next-step btn-primary btn"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>

                  <div data-step="4" className="wizard-step">
                    <h3 className="section-subtitle">Project Details</h3>
                    <p className="wizard-helper">
                      Share anything you&apos;d like — budget, dimensions,
                      inspiration, finish preferences. Optional but helpful.
                    </p>
                    <div className="form-group">
                      <textarea
                        name="details"
                        rows="6"
                        placeholder="Tell us about your vision..."
                        className="form-input form-textarea"
                      ></textarea>
                    </div>
                    <div className="wizard-actions">
                      <button
                        type="button"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="next-step btn-primary btn"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>

                  <div data-step="5" className="wizard-step">
                    <h3 className="section-subtitle">Contact Details</h3>
                    <p className="wizard-helper">
                      Full name is required. Provide an email, phone, or both —
                      whichever you prefer.
                    </p>
                    <div className="form-group">
                      <input
                        type="text"
                        name="full_name"
                        required="true"
                        placeholder="Full Name *"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="form-input"
                      />
                    </div>
                    <p className="wizard-error" id="contact-error"></p>
                    <div className="wizard-actions">
                      <button
                        type="button"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        id="submit-consult"
                        className="btn-accent btn"
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-marquee-divider hero-marquee-below-contact" aria-hidden="true">
          <div className="marquee-content">
            <span>STONE ARCHWAYS</span>
            <span className="marquee-dot"></span>
            <span>STONE FIREPLACE</span>
            <span className="marquee-dot"></span>
            <span>STONE COLUMNS</span>
            <span className="marquee-dot"></span>
            <span>STONE PATIO</span>
            <span className="marquee-dot"></span>
            <span>CUSTOM STONE WORK</span>
            <span className="marquee-dot"></span>
            <span>STONE ARCHWAYS</span>
            <span className="marquee-dot"></span>
            <span>STONE FIREPLACE</span>
            <span className="marquee-dot"></span>
            <span>STONE COLUMNS</span>
            <span className="marquee-dot"></span>
            <span>STONE PATIO</span>
            <span className="marquee-dot"></span>
            <span>CUSTOM STONE WORK</span>
            <span className="marquee-dot"></span>
          </div>
        </section>
        <section className="quick-cta-strip">
          <div className="cta-strip-container">
            <div className="cta-strip-glass">
              <div className="cta-strip-content">
                <h2 className="section-subtitle">
                  Ready to transform your space?
                </h2>
                <div className="cta-strip-actions">
                  <a href="tel:+16022459081">
                    <div className="cta-strip-phone">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>(602) 245-9081</span>
                    </div>
                  </a>
                  <a href="#contact" className="navigation-anchor">
                    <button type="button" className="btn-primary btn">
                      Book Consult
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="thank-you-modal"
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-card">
            <button
              type="button"
              id="modal-close"
              aria-label="Close"
              className="modal-close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 id="modal-title" className="modal-title">
              Thank you for selecting our services
            </h3>
            <p className="modal-subtitle">
              Miguel will reach out shortly to begin crafting your vision.
            </p>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes marquee {0% {transform: translateX(0);}
100% {transform: translateX(-50%);}}@keyframes fadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideIn {from {opacity: 0;
transform: translateX(20px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="wizard-form-logic">
(function(){
  const wizardForm = document.getElementById("consult-form")
  if (!wizardForm) return
  const nextBtns = wizardForm.querySelectorAll(".next-step")
  const prevBtns = wizardForm.querySelectorAll(".prev-step")
  const progressDots = wizardForm.querySelectorAll(".wizard-progress-step")
  const autoAdvanceCards = wizardForm.querySelectorAll(".option-card.auto-advance input")
  const errorEl = document.getElementById("contact-error")
  const submitBtn = document.getElementById("submit-consult")
  const modal = document.getElementById("thank-you-modal")
  const modalClose = document.getElementById("modal-close")

  const updateProgress = (stepIndex) => {
    progressDots.forEach((dot) => {
      const dotStep = parseInt(dot.dataset.progress)
      if (dotStep <= stepIndex) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  const goToStep = (targetStep) => {
    const currentActive = wizardForm.querySelector(".wizard-step.active")
    if (currentActive) currentActive.classList.remove("active")
    const target = wizardForm.querySelector(\`.wizard-step[data-step="\${targetStep}"]\`)
    if (target) {
      target.classList.add("active")
      updateProgress(targetStep)
    }
  }

  // Auto-advance on Step 1 selection
  autoAdvanceCards.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        setTimeout(() => goToStep(2), 200)
      }
    })
  })

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".wizard-step")
      const stepIndex = parseInt(currentStep.dataset.step)
      const inputs = currentStep.querySelectorAll("input[required]")
      let isValid = true
      inputs.forEach((input) => {
        if (input.type === "radio") {
          if (!wizardForm.querySelector(\`input[name="\${input.name}"]:checked\`)) {
            isValid = false
          }
        } else if (!input.value) {
          isValid = false
        }
      })
      if (isValid) {
        goToStep(stepIndex + 1)
      } else {
        alert("Please make a selection to continue.")
      }
    })
  })

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".wizard-step")
      const stepIndex = parseInt(currentStep.dataset.step)
      goToStep(stepIndex - 1)
    })
  })

  wizardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (errorEl) errorEl.textContent = ""
    const name = wizardForm.querySelector('input[name="full_name"]').value.trim()
    const email = wizardForm.querySelector('input[name="email"]').value.trim()
    const phone = wizardForm.querySelector('input[name="phone"]').value.trim()

    if (!name) {
      if (errorEl) errorEl.textContent = "Please enter your full name."
      return
    }
    if (!email && !phone) {
      if (errorEl) errorEl.textContent = "Please provide an email, a phone number, or both."
      return
    }

    if (modal) {
      modal.classList.add("open")
      document.body.style.overflow = "hidden"
    }
    wizardForm.reset()
    goToStep(1)
  })

  if (modalClose && modal) {
    const closeModal = () => {
      modal.classList.remove("open")
      document.body.style.overflow = ""
    }
    modalClose.addEventListener("click", closeModal)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal()
    })
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal()
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-option-content-elm1 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm2 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm3 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm4 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm5 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm6 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
