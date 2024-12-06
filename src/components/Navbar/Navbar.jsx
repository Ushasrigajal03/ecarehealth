import React from "react";
import logo from "../../assets/logo.png";
import "../../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} className="img-fluid logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ms-3">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/about"}>
                About Us
              </Link>
              <Link className="nav-link" to={"/careers"}>
                Careers
              </Link>
              <Link className="nav-link" to={"/contact"}>
                Contact Us
              </Link>
             
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;