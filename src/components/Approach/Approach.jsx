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
      <h1 className="approach-title" style={{ fontSize: "40px" }}>
        Our Approach
      </h1>
      <div className="steps-wrapper">
        {/* Step 1 */}
        <div
          className="step step-1 scroll-hidden"
          ref={(el) => (divRefs.current[0] = el)}
        >
          <h3>Step-01</h3>
          <h4>Discovery & Research</h4>
          <p style={{fontSize:'14px'}}>
            We start by understanding your business and audience, identifying
            growth opportunities through data.
          </p>
        </div>

        {/* Step 2 */}
        <div
          className="step step-2 scroll-hidden"
          ref={(el) => (divRefs.current[1] = el)}
        >
          <h3>Step-02</h3>
          <h4>Strategic Planning</h4>
          <p style={{fontSize:'14px'}}>
            With insights in hand, we create a tailored marketing strategy
            designed for maximum impact.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className="step step-3 scroll-hidden " 
          ref={(el) => (divRefs.current[2] = el)}
        >
          <h3>Step-03</h3>
          <h4>Execution & Optimization</h4>
          <p style={{fontSize:'14px'}}>
            Campaigns are launched across channels, with ongoing optimization
            to ensure the best results.
          </p>
        </div>

        {/* Step 4 */}
        <div
          className="step step-4 scroll-hidden"
          ref={(el) => (divRefs.current[3] = el)}
        >
          <h3>Step-04</h3>
          <h4>Analytics & Reporting</h4>
          <p style={{fontSize:'14px'}}>
            Detailed reports and actionable insights are delivered, keeping you
            informed every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
