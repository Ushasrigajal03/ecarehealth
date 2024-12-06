import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./components/ContactUs/Contact";
import Subscribe from "./components/Subscribe/Subscribe";
import Approach from "./components/Approach/Approach";
import ComingSoon from "./components/Comingsoon/ComingSoon";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Careers from "./components/careers/Careers"
// import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        {/* Main Pages */}
        <Route
          path="/"
          element={
            <>
            <Home/>
            {/* <About/> */}
              <Approach />
              <Subscribe />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About/>}>

        </Route>
        <Route path="/careers" element={<Careers/>}>

        </Route>
        <Route path="/contact" element={<Contact/>}>

      </Route>
        <Route
          path="/comingsoon"
          element={
            <>
              <ComingSoon />
              
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
