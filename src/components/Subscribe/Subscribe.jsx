import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Subscribe = () => {
  // State to handle form visibility and form data
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    lastname: ''
  });

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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add any additional logic to handle form submission (e.g., API call)
    setShowForm(false); // Close form after submission
  };

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
          <button
            className="btn  px-4 py-2"
            style={{backgroundColor:"#394ff7" , color:'white'} }

            onClick={() => setShowForm(true)}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Conditional Rendering of the Form */}
      {showForm && (
        <div className="modal d-flex justify-content-center align-items-center" style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-content p-4 bg-white rounded" style={{ width: '400px' }}>
            <h2 className="text-center mb-4">Subscribe</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname:</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Enter your lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">Submit</button>
                <button
                  type="button"
                  className="btn "
                  style={{backgroundColor:"#394ff7" , color:'white'} }
                  onClick={() => setShowForm(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Subscribe;
