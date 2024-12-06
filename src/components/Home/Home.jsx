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
                <h2>Supplement Your Coverage with Medigap</h2>
                <p className="mt-4">
                  Bridge the gaps in your Medicare coverage with Medigap plans
                  that cover copayments, deductibles, and more. We offer expert
                  advice to help you choose the best policy for your peace of
                  mind.
                </p>
              </div>
            </div>
            <div className="services">
              <h1 className="text-center my-5">Our Services</h1>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="hero-card my-4 shadow-lg">
                    <div className="card-body text-center">
                        <img src={hospital1} alt=""  height="100px" className="mt-2"/>
                      <h2 className="my-4">Hospitals & Network</h2>
                      <p className="mx-2">
                        Partnered with top-tier hospitals and healthcare
                        networks to provide seamless and reliable medical care
                        whenever, wherever you need it.
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
                        Access expert doctors and professional nursing care,
                        offering personalized medical support and recovery
                        assistance at home or trusted facilities.
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
                        Convenient and timely access to essential medications
                        through our trusted pharmacy partners, ensuring you
                        never miss a dose.
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
                        PRegain mobility and strength with specialized
                        physiotherapy services tailored to your recovery and
                        wellness goals.
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
                        Quick and accurate diagnostic tests with home collection
                        options, making healthcare more accessible and
                        hassle-free.
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
                        Round-the-clock ambulance services to ensure timely
                        medical attention during emergencies, providing peace of
                        mind to you and your family.
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
              <h1 className="text-center">How It Works</h1>
              <p className="text-lead mt-4">
                Navigating healthcare services should be simple and stress-free.
                Follow these steps to connect with doctors, nursing care, and
                other essential services tailored for your needs.
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
                            ? "Partnered with top-tier hospitals and healthcare networks."
                            : service === "Doctors & Nursing"
                            ? "Access expert doctors and professional nursing care."
                            : "Convenient access to essential medications."}
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