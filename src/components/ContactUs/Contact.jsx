import React, { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import "font-awesome/css/font-awesome.min.css";
import email from "../../assets/email.png";
// import logo from "../../assets/logo.png";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
    });

    // Reveal the elements when they come into view
    sr.reveal('.contact-card', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 300,
    });

    sr.reveal('.contact-form-container', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 500,
    });

    sr.reveal('.contact-item', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 300,
    });

    sr.reveal('.form', {
      opacity: 0,
      scale: 0.85,
      interval: 300,
      delay: 300,
    });

    // Cleanup ScrollReveal if necessary
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <>
      <section className="mt-3 py-3 ">
        <div className="container bg-light py-3 " style={{ borderRadius: '20px' }}>
          <div className="row mt-5">
            <div
              className="col-12 col-md-5 ms-0 text-center text-md-start "
              style={{ marginTop: "50px" }}
            >
              <h2 style={{ fontWeight: "bold", color: "#4f1a69" }}>
                Get in Touch
              </h2>
              <h6 style={{ fontWeight: "bold" }}>
                Unlock Scalable Growth with Precision-Driven <br /> Digital
                Marketing
              </h6>
              <div>
                <div className="contact-card ms-3">
                  {/* Email Card */}
                  <div className="contact-item">
                    <div>
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ borderRadius: "10px" }}
                      >
                        <rect width="72" height="72" fill="#F2F1FF" />
                        <path
                          opacity="0.35"
                          d="M49.3 51.2H22.7C19.5517 51.2 17 48.6483 17 45.5V26.5C17 23.3517 19.5517 20.8 22.7 20.8H49.3C52.4483 20.8 55 23.3517 55 26.5V45.5C55 48.6483 52.4483 51.2 49.3 51.2Z"
                          fill="#4A3AFF"
                        />
                        <path
                          d="M32.0898 35.5535L17 26.5C17 23.3517 19.5517 20.8 22.7 20.8H49.3C52.4483 20.8 55 23.3517 55 26.5L39.9102 35.5535C37.5029 36.9975 34.4971 36.9975 32.0898 35.5535Z"
                          fill="#4A3AFF"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      <p>Email:</p>
                      <a href="mailto:Info@megaleap.ai">Info@megaleap.ai</a>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="contact-item">
                    <div>
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ borderRadius: "10px" }}
                      >
                        <rect width="72" height="72" fill="#F2F1FF" />
                        <path
                          opacity="0.35"
                          d="M19.1633 27.5378C19.5826 30.66 21.224 37.8357 27.6952 44.3069C34.1663 50.778 41.3401 52.4194 44.4642 52.8387C46.7271 53.3279 49.1806 52.7065 50.9392 50.948C53.6893 48.1979 43.7276 38.2361 40.9774 40.9863L39.2227 42.741L29.261 32.7793L31.0138 31.0246C33.764 28.2744 23.8023 18.3127 21.0521 21.0629C19.2936 22.8214 18.6722 25.275 19.1633 27.5378Z"
                          fill="#4A3AFF"
                        />
                        <path
                          d="M21.0581 21.0572L31.0179 31.017C33.7624 28.265 33.7624 23.8111 31.0123 21.061C28.2659 18.3146 23.8101 18.3127 21.0581 21.0572Z"
                          fill="#4A3AFF"
                        />
                        <path
                          d="M40.9814 40.9805L50.9413 50.9403C53.6857 48.1902 53.6857 43.7344 50.9356 40.9843C48.1873 38.2379 43.7335 38.236 40.9814 40.9805Z"
                          fill="#4A3AFF"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      <p>Phone:</p>
                      <a href="tel:+917396313939">(+91) 7396 31 3939</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="contact-form-container bg-white">
                  <h2>Send us a message</h2>
                  <form className="form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" style={{ fontSize: "18px" }}>
                          Name
                        </label>
                        <input type="text" id="name" placeholder="Your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" style={{ fontSize: "18px" }}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone" style={{ fontSize: "18px" }}>
                          Phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company" style={{ fontSize: "18px" }}>
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" style={{ fontSize: "18px" }}>
                        Leave us a message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Please type your message here..."
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      Contact us
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
