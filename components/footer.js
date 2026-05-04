import React from 'react'

import Script from 'dangerous-html/react'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-top-grid">
              <div className="footer-brand-col footer-column">
                <div className="footer-logo-wrap">
                  <img
                    src="/sonora-stone-logo.png"
                    alt="Sonora Stone — Stone Installation"
                    className="footer-logo-img"
                    width={260}
                    height={94}
                  />
                </div>
                <p className="section-content footer-description">
                  Bespoke craftsmanship for modern living. 100% custom work
                  tailored specifically to your vision. No templates, no
                  shortcuts—pure excellence.
                </p>
                <div className="footer-contact-info">
                  <a href="tel:+16022459081">
                    <div className="footer-contact-link">
                      <div className="footer-icon-wrapper">
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
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </div>
                      <span>(602) 245-9081</span>
                    </div>
                  </a>
                  <div className="footer-contact-link">
                    <div className="footer-icon-wrapper">
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
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>Serving Arizona&apos;s Premier Residences</span>
                  </div>
                </div>
              </div>
              <div className="footer-column footer-nav-col">
                <h3 className="footer-heading">Bespoke Services</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Custom stone veneer work</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Indoor stone veneer fireplace</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Stone veneer pillars and archways</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Custom stone work</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column footer-nav-col">
                <h3 className="footer-heading">Sonora Stone</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="/">
                      <div className="footer-link">
                        <span>Home page</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="footer-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#gallery">
                      <div className="footer-link">
                        <span>Gallery section</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <div className="footer-link">
                        <span>Book a Consultation</span>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="footer-social-wrapper">
                  <a href="#">
                    <div
                      aria-label="Follow us on Instagram"
                      className="footer-social-btn"
                    >
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
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="Follow us on Facebook"
                      className="footer-social-btn"
                    >
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
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-legal-wrap">
                <span className="footer-copyright">
                  © 2026 Sonora Stone. All Rights Reserved.
                </span>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-signature">
                <span>Handcrafted in Arizona</span>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  // No complex logic required for the footer,
  // but we can add a subtle entrance animation for the social buttons
  const socialButtons = document.querySelectorAll(".footer-social-btn")

  if (socialButtons.length > 0) {
    socialButtons.forEach((btn, index) => {
      btn.style.opacity = "0"
      btn.style.transform = "translateY(10px)"

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                btn.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                btn.style.opacity = "1"
                btn.style.transform = "translateY(0)"
              }, index * 100)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(btn)
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-logo-img {
            display: block;
            height: auto;
            max-width: 240px;
            width: 100%;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
