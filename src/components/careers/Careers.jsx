import React, { useState } from "react";
import "../../App.css";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  const closeForm = () => {
    setSelectedJob(null);
  };

  return (
    <section className="job-application">
      <h1 className="text-center my-4">Job Applications</h1>
      <div className="container">
      <div className="grid">
          <div className="row text-center">
            <div className="col-md-4">
            <div className="card">
              <h2 className="my-4">Doctor</h2>
              <p>Provide medical expertise and ensure patient well-being.</p>
              <button
                onClick={() => handleApply("Doctor")}
                className="btn btn-success"
              >
                Apply
              </button>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
              <h2 className="my-4">Nurse</h2>
              <p>Deliver compassionate nursing care and assist in recovery.</p>
              <button
                onClick={() => handleApply("Nurse")}
                className="btn btn-success"
              >
                Apply
              </button>
            </div>
          </div>
            <div className="col-md-4">
            <div className="card">
              <h2 className="my-4">Care Taker</h2>
              <p>Provide support and assistance in daily activities and recovery</p>
              <button
                onClick={() => handleApply("Doctor")}
                className="btn btn-success"
              >
                Apply
              </button>
            </div>
            </div>
          </div>
      </div>
        
      </div>
      {/* <div className="careers-card-container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <h2>Doctor</h2>
              <p>Provide medical expertise and ensure patient well-being.</p>
              <button
                onClick={() => handleApply("Doctor")}
                className="careers-btn-apply"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h2>Care Taker</h2>
              <p>Provide support and assistance in daily activities.</p>
              <button
                onClick={() => handleApply("Care Taker")}
                className="careers-btn-apply"
              >
                Apply
              </button>
            </div>
          </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h2>Care Taker</h2>
              <p>Provide support and assistance in daily activities.</p>
              <button
                onClick={() => handleApply("Care Taker")}
                className="careers-btn-apply"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* Conditional Rendering of Form */}
      {selectedJob && (
        <div className="careers-form-modal">
          <div className="careers-form-container">
            <h2>Apply for {selectedJob}</h2>
            <form>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />

              <label htmlFor="resume">Attach Resume:</label>
              <input type="file" id="resume" name="resume" required />

              <button type="submit" className="careers-btn-submit">
                Submit
              </button>
              <button
                type="button"
                className="careers-btn-close"
                onClick={closeForm}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;
