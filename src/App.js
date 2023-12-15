import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import Hiring from "./Components/Hirings/Hiring";
import Testimonials from "./Components/Testimonials/Testimonials";
import IndexRoute from "./Components/IndexRoute";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import BusinessDev from "./Components/Hirings/BusinessDev";
import DigitalMarketer from "./Components/Hirings/DigitalMarketer";
import Trainers from "./Components/Hirings/Trainers";
import Customer from "./Components/Hirings/Customer";
import Course from "./Components/Courses/Course";

function App() {
  return (
   
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses" element={<Course />} />
          <Route path="hiring" element={<Hiring />}>
            <Route path="/hiring" element={<IndexRoute />}>
              {/* <Route index element={<DigitalMarketers />} /> */}
              <Route path="businessprofessionals" element={<BusinessDev />} />
            </Route>
            <Route path="digitalmarketer" element={<DigitalMarketer />} />
            <Route path="trainer" element={<Trainers />} />
            <Route path="customer" element={<Customer />} />
          </Route>

          <Route path="testimonials" element={<Testimonials />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
 
  );
}

export default App;
