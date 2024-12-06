import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Subscribe = () => {
  useEffect(() => {
    // Initialize ScrollReveal on the container
    const sr = ScrollReveal({
      reset: true, // Ensures animation triggers every time it's scrolled into view
      distance: '50px', // Distance the element moves during animation
      duration: 500, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // Animation easing
      origin: 'bottom', // Animation starting point (bottom, top, left, right)
      scale: 0.9, // Scale down effect before animation
    });

    sr.reveal('.subscribe-container'); // Target the main container for animation
  }, []);

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center vh-80 bg-light mt-3 subscribe-container"
        style={{ borderRadius: '20px' }}
      >
        <div className="text-center p-5">
          <p className="pt-3 my-3" style={{ fontSize: '35px', fontFamily: 'serif' }}>
            Ready to Secure Your Future?
          </p>
          <p className="mb-4 px-3">
            Contact us today for a personalized consultation and take the first step toward a worry-free life.
          </p>
          <p className="my-3" style={{ fontSize: '35px', fontFamily: 'serif' }}>
            Join 900+ subscribers
          </p>
          <p className="mb-4">Stay in the loop with everything you need to know.</p>
          <button className="btn btn-dark px-4 py-2">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
