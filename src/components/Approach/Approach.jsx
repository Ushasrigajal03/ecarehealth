import React, { useEffect, useRef } from "react";
import "./Approach.css";

const Approach = () => {
  const divRefs = useRef([]); // Array of refs for each step

  useEffect(() => {
    const handleScroll = () => {
      divRefs.current.forEach((div) => {
        if (div) {
          const { top } = div.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Check if the div is in the viewport
          if (top < windowHeight - 100) {
            div.classList.add("scroll-visible");
          } else {
            div.classList.remove("scroll-visible");
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check for elements already in view
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="approach-container">
      <h1 className="approach-title" style={{ fontSize: "40px" ,color:"#333"}}>
        Care Journey
      </h1>
      <div className="steps-wrapper">
        {/* Step 1 */}
        <div
          className="step step-1 scroll-hidden"
          ref={(el) => (divRefs.current[0] = el)}
        >
          <h3 style={{color:"#394ff7"}}>Step-01</h3>
          <h4>Initial Contact</h4>
          <p style={{fontSize:'14px'}}>
            Your healthcare journey starts with a simple phone call. Our dedicated call center
            team listens, understands your needs, and sets everything in motion to deliver prompt,
            personalized care.
          </p>
        </div>

        {/* Step 2 */}
        <div
          className="step step-2 scroll-hidden"
          ref={(el) => (divRefs.current[1] = el)}
        >
          <h3 style={{color:"#394ff7"}}>Step-02</h3>
          <h4>Rapid Response</h4>
          <p style={{fontSize:'14px'}}>
            Once we have your details, we quickly dispatch a qualified caregiver to assist you—aiming
            to be at your side within just <strong> 9 minutes </strong>. Our goal is to ensure timely attention and
            peace of mind.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className="step step-3 scroll-hidden " 
          ref={(el) => (divRefs.current[2] = el)}
        >
          <h3 style={{color:"#394ff7"}}>Step-03</h3>
          <h4>Tailored Care</h4>
          <p style={{fontSize:'14px'}}>
            Based on the initial assessment, you’ll receive the care you need right where you are.
            If needed, we connect you with a regional doctor, specialist, or network hospital for
            more advanced treatment.
          </p>
        </div>

        {/* Step 4 */}
        <div
          className="step step-4 scroll-hidden"
          ref={(el) => (divRefs.current[3] = el)}
        >
          <h3 style={{color:"#394ff7"}}>Step-04</h3>
          <h4>Care Delivery</h4>
          <p style={{fontSize:'14px'}}>
            Your healthcare journey concludes with coordinated care delivery. We oversee all
            services, track progress, and provide support—helping you move forward with greater
            confidence and health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
