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
            Ready for Better Health Coverage?
          </p>
          <p className="mb-4 px-3">
            Contact us today for a personalized preview of our upcoming services and be among the
            first to experience a new era in accessible, worry-free healthcare.
          </p>
          <p className="my-3" style={{ fontSize: '35px', fontFamily: 'serif' }}>
            Be the First to Know
          </p>
          <p className="mb-4">Stay informed about our launch and early offerings. Sign up now to
            receive updates and important announcements straight to your inbox.</p>
          <button className="btn btn-dark px-4 py-2">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
