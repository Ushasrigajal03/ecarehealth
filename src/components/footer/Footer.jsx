import React, { useEffect } from 'react';
import './Footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
    });

    // Reveal the footer elements when they come into view
    sr.reveal('.footer-container', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 200,
    });

    sr.reveal('.FooterData', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 400,
    });

    sr.reveal('.footer-container h6', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 200,
    });

    sr.reveal('.footer-container ul', {
      opacity: 0,
      scale: 0.85,
      interval: 200,
      delay: 200,
    });

    // Cleanup ScrollReveal if necessary
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <section className='Section-Footer'>
      <footer className="footer-container bg-light py-4">
        <div className="container">
          <div className="row align-items-start">
            {/* Logo Section */}
            <div className="col-12 col-md-4 ms-0 text-center text-md-start">
              <img
                src={logo} // Replace with your logo's path
                alt="ECAREHEALTH Logo"
                className="img-fluid mb-2"
                style={{ maxWidth: '230px' }}
              />
            </div>

            <div className="col-12 col-md-8 FooterData">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <h6 style={{fontSize:"16px"}} >About</h6>
                  <ul  style={{fontWeight:'300' , fontSize:'14px'}}>
                    <li><Link to="/comingsoon">Our Team</Link></li>
                    <li><Link to="/comingsoon">Awards and Memberships</Link></li>
                    <li><Link to="/comingsoon">Philanthropic & Charity Programs</Link></li>
                    <li><Link to="/comingsoon">Careers</Link></li>
                  </ul>
                </div>

                {/* Privacy Section */}
                <div className="col-12 col-sm-4">
                  <h6 style={{fontSize:"16px"}}>Privacy</h6>
                  <ul  style={{fontWeight:'300' , fontSize:'14px'}}>
                    <li><Link to="/comingsoon">Privacy Policy</Link></li>
                    <li><Link to="/comingsoon">Terms and Conditions</Link></li>
                    <li><Link to="/comingsoon">Contact Us</Link></li>
                  </ul>
                </div>

                {/* Social Section */}
                <div className="col-12 col-sm-4">
                  <h6 style={{fontSize:"16px" }}>Social</h6>
                  <ul  style={{fontWeight:'300' , fontSize:'14px'}}>
                    <li><Link to="/comingsoon">Facebook</Link></li>
                    <li><Link to="/comingsoon">Instagram</Link></li>
                    <li><Link to="/comingsoon">Twitter/X</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="text-center mt-4">
            <small>© STON CART Global IT Solutions Pvt. Ltd.</small>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
