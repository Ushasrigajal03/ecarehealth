import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <section className="text-center py-5">
        <h1>About Us</h1>
        <p className="lead">
          At eCareHealth, we are committed to redefining healthcare by providing universal access to comprehensive medical services under one unified platform.
        </p>
      </section>

      <section className="mission-vision py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>
                To create a seamless healthcare ecosystem where individuals and families can access the care they need—anytime, anywhere. We aim to bridge the gaps in healthcare delivery, ensuring that no one is left behind.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
                At eCareHealth, our mission is to provide every household with access to:
              </p>
              <ul>
                <li>A dedicated family doctor for personalized medical guidance.</li>
                <li>Rapid emergency response, ensuring care reaches you within 9 minutes.</li>
                <li>Comprehensive coverage, including diagnostics, hospitalization, and post-treatment support.</li>
                <li>A holistic healthcare network that combines local expertise with global standards.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-offer py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What We Offer</h2>
          <div className="row">
            {[
              {
                title: "Family-Centered Care",
                description:
                  "Personalized healthcare services through locally stationed family doctors, nurses, and healthcare workers.",
              },
              {
                title: "Comprehensive Coverage",
                description:
                  "Access to regular health check-ups, diagnostic tests (including advanced scans like MRI), emergency care, and surgeries, all covered under an affordable health plan.",
              },
              {
                title: "Pharma and Medicines",
                description:
                  "Regular and emergency medication delivered to your doorstep, ensuring continuity in treatment.",
              },
              {
                title: "Emergency Services",
                description:
                  "Ambulance services equipped with first-aid facilities to respond to emergencies within minutes.",
              },
              {
                title: "Advanced Network",
                description:
                  "A vast network of hospitals, labs, and call centers to ensure seamless coordination and accessibility.",
              },
            ].map((offer, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{offer.title}</h5>
                    <p className="card-text">{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <ul className="list-group">
            {[
              "Holistic Care: All healthcare needs—from diagnostics to surgeries—are covered under one umbrella.",
              "Rapid Response: Emergency care within 9 minutes ensures timely medical attention.",
              "Local Expertise: Our healthcare professionals are based in your community, providing a personal touch.",
              "Social Responsibility: As a socially conscious company, we aim to support underprivileged communities through affordable healthcare services.",
              "Cutting-Edge Technology: Integration of medical databases and call centers for real-time assistance and seamless coordination.",
            ].map((reason, index) => (
              <li className="list-group-item" key={index}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
