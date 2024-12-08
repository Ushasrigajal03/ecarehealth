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
    <section className="job-application py-5">
      <h1 className="text-center my-4">Job Applications</h1>

      <div className="container">
        <div className="row">
          {/* Job Listings as List Items */}
          <div className="col-md-12">
            <ul className="list-group">
              {/* Doctor Item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>Doctor</h5>
                  <p>Provide medical expertise and ensure patient well-being.</p>
                </div>
                <button
                  onClick={() => handleApply("Doctor")}
                  className="btn  btn-sm"
                  style={{backgroundColor:"#394ff7" , color:'white'} }
                >
                  Apply
                </button>
              </li>

              {/* Nurse Item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>Nurse</h5>
                  <p>Deliver compassionate nursing care and assist in recovery.</p>
                </div>
                <button
                  onClick={() => handleApply("Nurse")}
                  className="btn  btn-sm"
                  style={{backgroundColor:"#394ff7" , color:'white'} }
                >
                  Apply
                </button>
              </li>

              {/* Care Taker Item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>Care Taker</h5>
                  <p>Provide support and assistance in daily activities and recovery</p>
                </div>
                <button
                  onClick={() => handleApply("Care Taker")}
                  className="btn  btn-sm"
                  style={{backgroundColor:"#394ff7" , color:'white'} }
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    
      {selectedJob && (
        <div className="careers-form-modal">
          <div className="careers-form-container">
            <h2>Apply for {selectedJob}</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="resume" className="form-label">
                  Attach Resume:
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
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
