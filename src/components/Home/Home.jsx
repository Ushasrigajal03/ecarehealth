import React, { useState } from "react";
import "../../App.css";
import herosection from "../../assets/herosection.jpg";
import hospital1 from "../../assets/hospital1.svg";
import doctor from "../../assets/doctor.svg";
import pharma from "../../assets/pharma.svg";
import physcotherapy from "../../assets/physcotherapy.svg";
import xray from "../../assets/xray.svg";
import ambulance from "../../assets/ambulance.svg";
const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleContent = (cardId) => {
    setExpandedCard((prevCard) => (prevCard === cardId ? null : cardId));
  };
  return (
    <>
      <section className="hero-section">
        <div className="grid">
          <div className="carousels">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={herosection}
                    className="d-block w-100 carousel_image"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Compassionate Insurance & Medical Solutions for Elders.
                    </h5>
                    <p>
                      Ensuring peace of mind with tailored healthcare and
                      insurance solutions for your golden years
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={herosection}
                    className="d-block w-100 carousel_image"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={herosection}
                    className="d-block w-100 carousel_image"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="grid">
            <div className="col-md-12 col-lg-12 mt-5">
              <div className="supplements text-center">
                <h2>Your Health, Our Promise</h2>
                <p className="mt-4">
                  At eCareHealth, we provide holistic healthcare coverage—offering personalized
                  guidance, seamless services, and comprehensive support at every stage of your
                  journey from prevention to recovery—so you can stay healthier, happier, and
                  confidently cared for.
                </p>
              </div>
            </div>
            <div className="services">
              <h1 className="text-center my-5">Our Coverage</h1>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={hospital1} alt=""  height="100px" className="mt-2"/>
                      <h2 className="my-4">Hospitals & Network</h2>
                      <p className="mx-2">
                        Access an extensive network of top-tier hospitals and healthcare facilities,
                        ensuring seamless, expert treatment whenever and wherever you need it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={doctor} alt="" height="100px" className="mt-2"/>
                      {/* <i
                        className="fa fa-user-md  mt-4 text-primary"
                        style={{ fontSize: "50px" }}
                      /> */}
                      <h2 className="my-4">Doctors & Nursing</h2>
                      <p className="mx-2">
                        Benefit from personalized medical guidance and professional nursing support
                        —whether at home or in a trusted care facility—to help you recover
                        comfortably and confidently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={pharma} alt="" height="100px" className="mt-2"/>
                      {/* <i
                        className="fa fa-pills  mt-4 text-primary"
                        style={{ fontSize: "50px" }}
                      /> */}
                      <h2 className="my-4">Pharma</h2>
                      <p className="mx-2">
                        Gain reliable access to essential medications delivered through our
                        certified pharmacy partners, so you never skip a dose and always stay
                        on track with your health.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={physcotherapy} alt="" height="100px" className="mt-2"/>
                      {/* <i
                        className="fa fa-stethoscope  mt-4 text-primary"
                        style={{ fontSize: "50px" }}
                      /> */}
                      <h2 className="my-4">Physiotherapy</h2>
                      <p className="mx-2">
                        Rebuild strength, restore mobility, and accelerate your recovery with
                        specialized physiotherapy services, tailored to your unique wellness goals
                        and provided at your convenience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={xray} alt=""  height="100px" className="mt-2"/>
                      {/* <i
                        className="fa fa-x-ray mt-4 text-primary"
                        style={{ fontSize: "50px" }}
                      /> */}
                      <h2 className="my-4">Lab & Diagnostics</h2>
                      <p className="mx-2">
                        Utilize accurate, hassle-free diagnostic testing—often with home collection
                        options—ensuring timely, informed decisions about your health and well-being.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={ambulance} alt="" height="100px" className="mt-2"/>
                      {/* <i
                        className="fa fa-ambulance mt-4 text-primary"
                        style={{ fontSize: "50px" }}
                      /> */}
                      <h2 className="my-4">Ambulance Services</h2>
                      <p className="mx-2">
                        Count on round-the-clock ambulance support for prompt emergency response,
                        offering peace of mind when every second counts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="works my-5">
        <div className="container">
          <div className="grid">
            <div className="col-md-12 col-lg-12 mt-5">
              <h1 className="text-center">The Holistic Care Ecosystem</h1>
              <p className="text-center mt-4">
                Navigating your healthcare journey should be seamless. Explore each segment to
                access tailored care, connect with the right professionals, and ensure timely
                delivery of essential medicines.
              </p>
            </div>
            <div className="row mt-3">
              {/* Loop through cards */}
              {["Hospitals & Network", "Doctors & Nursing", "Pharma"].map(
                (service, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="works-card my-4 shadow-lg">
                      <div className="card-body text-center">
                        <img src={hospital1} alt="" height="100px" className="mt-2"/>
                        {/* <i className="fa fa-hospital mt-4 text-primary"
                        style={{fontSize:"50px"}}
                        /> */}
                        <h2 className="my-4">{service}</h2>
                        <p className="mx-2">
                          {service === "Hospitals & Network"
                            ? "View our extensive list of trusted network hospitals, each chosen " +
                              "for their quality care and comprehensive services. With just a click, " +
                              "discover facilities near you, review their specialties, and select " +
                              "the best option for your healthcare needs."
                            : service === "Doctors & Nursing"
                            ? "Connect with the right medical professionals at the right time. " +
                                  "Start with RMP doctors for in-home primary care and routine " +
                                  "consultations, and if needed, move on to region-specific M.B.B.S " +
                                  "doctors for more complex cases or specialized care."
                            : "Access essential medications from our evolving pharmacy solutions" +
                                  "—whether through a marketplace or direct " +
                                  "network-hospital fulfillment. Our flexible delivery ensures that " +
                                  "prescriptions arrive promptly at your doorstep, keeping your " +
                                  "treatment plan on track."}
                        </p>
                        <button
                          className="btn btn-success"
                          onClick={() => toggleContent(index)}
                        >
                          {expandedCard === index ? "See Less" : "See More"}
                        </button>
                        {expandedCard === index && (
                          <div className="mt-3">
                            <p>
                              Additional details about {service}. You can add
                              more descriptive content here.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;