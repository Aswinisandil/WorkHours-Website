import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./Hiring.module.css";
import { SlArrowDown } from "react-icons/sl";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Schedule from "../Schedule/Schedule";
import BusinessDev from "./BusinessDev";
import DigitalMarketer from "./DigitalMarketer";
import Trainers from "./Trainers";
import Customer from "./Customer";

const Hiring = () => {
  const location = useLocation();

  const openGoogleForm = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdOcMELRhWf3dxyBPE6mhtn4KcLdDMhGBNv0aArk0FB88BSEQ/viewform";

    window.open(googleFormUrl, "_blank");
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "white",
      backgroundColor: isActive ? "#ffffff" : "transparent",
      borderRadius: isActive ? "0.5vw 0.5vw 0vw 0vw" : "none",
      backgroundHeight: isActive ? "100vh" : "50vh",
    };
  };

  return (
    <>
      {location.pathname === "/hiring" && (
        <div className={css.ServiceContainer}>
          <Navbar />
          <nav className={css.navigation}>
            <div className={css.content}>
              <h1 className={css.gradientBorder}>We're Hiring</h1>
            </div>
            <div className={css.links}>
              <NavLink
                to="businessprofessionals"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Business Development</p>
              </NavLink>
              <NavLink
                to="digitalmarketer"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Digital Marketer</p>
              </NavLink>
              <NavLink to="trainer" style={navLinkStyles} className={css.card}>
                <p>Trainer</p>
              </NavLink>
              <NavLink to="customer" style={navLinkStyles} className={css.card}>
                <p>Customer Support</p>
              </NavLink>
            </div>
            
            {/* <div className={css.button} onClick={openGoogleForm}>
            Apply Now
            </div> */}
          </nav>
          
          <Outlet />
         

          <Footer />
        </div>
      )}

      {location.pathname === "/hiring/businessprofessionals" && (
        <div className={css.MarketContainer}>
          <Navbar />
          <nav className={css.Marketnavigation}>
            <div className={css.content}>
              <h1 className={css.gradientBorder}>We're Hiring</h1>
            </div>
            <div className={css.links}>
              <NavLink
                to="businessprofessionals"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Business Development </p>
              </NavLink>
              <NavLink
                to="digitalmarketer"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Digital Marketer</p>
              </NavLink>
              <NavLink to="trainer" style={navLinkStyles} className={css.card}>
                <p>Trainer</p>
              </NavLink>
              <NavLink to="customer" style={navLinkStyles} className={css.card}>
                <p>Customer Support</p>
              </NavLink>
            </div>
          </nav>

          <Outlet />
          {/* <Schedule/> */}

          <div className={css.button} onClick={openGoogleForm}>
            Apply Now
          </div>
          <Footer />
        </div>
      )}

      {location.pathname === "/hiring/digitalmarketer" && (
        <div className={css.MarketContainer}>
          <Navbar />
          <nav className={css.Marketnavigation}>
            <div className={css.content}>
              <h1 className={css.gradientBorder}>We're Hiring</h1>
            </div>
            <div className={css.links}>
              <NavLink
                to="businessprofessionals"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Business Development</p>
              </NavLink>
              <NavLink
                to="digitalmarketer"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Digital Marketer</p>
              </NavLink>
              <NavLink to="trainer" style={navLinkStyles} className={css.card}>
                <p>Trainer</p>
              </NavLink>
              <NavLink to="customer" style={navLinkStyles} className={css.card}>
                <p>Customer Support</p>
              </NavLink>
            </div>
          </nav>

          <Outlet />
          {/* <Schedule/> */}

          <div className={css.button} onClick={openGoogleForm}>
            Apply Now
          </div>
          <Footer />
        </div>
      )}

      {location.pathname === "/hiring/trainer" && (
        <div className={css.MarketContainer}>
          <Navbar />
          <nav className={css.Marketnavigation}>
            <div className={css.content}>
              <h1 className={css.gradientBorder}>We're Hiring</h1>
            </div>
            <div className={css.links}>
              <NavLink
                to="businessprofessionals"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Business Development</p>
              </NavLink>
              <NavLink
                to="digitalmarketer"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Digital Marketer</p>
              </NavLink>
              <NavLink to="trainer" style={navLinkStyles} className={css.card}>
                <p>Trainer</p>
              </NavLink>
              <NavLink to="customer" style={navLinkStyles} className={css.card}>
                <p>Customer Support</p>
              </NavLink>
            </div>
          </nav>

          <Outlet />
          {/* <Schedule/> */}

          <div className={css.button} onClick={openGoogleForm}>
            Apply Now
          </div>
          <Footer />
        </div>
      )}

      {location.pathname === "/hiring/customer" && (
        <div className={css.MarketContainer}>
          <Navbar />
          <nav className={css.Marketnavigation}>
            <div className={css.content}>
              <h1 className={css.gradientBorder}>We're Hiring</h1>
            </div>
            <div className={css.links}>
              <NavLink
                to="businessprofessionals"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Business Development</p>
              </NavLink>
              <NavLink
                to="digitalmarketer"
                style={navLinkStyles}
                className={css.card}
              >
                <p>Digital Marketer</p>
              </NavLink>
              <NavLink to="trainer" style={navLinkStyles} className={css.card}>
                <p>Trainer</p>
              </NavLink>
              <NavLink to="customer" style={navLinkStyles} className={css.card}>
                <p>Customer Support</p>
              </NavLink>
            </div>
          </nav>

          <Outlet />
          {/* <Schedule/> */}

          <div className={css.button} onClick={openGoogleForm}>
            Apply Now
          </div>
          <Footer />
        </div>
      )}

      {/* Mobile version */}

      <div className={css.serviceMobile}>
        <div className={css.Mobilenavigation}>
          <Navbar />
          <div className={css.content}>
            <h1 className={css.gradientBorder}>We're Hiring</h1>
          </div>

          <MDBAccordion initialActive={0}>
            <MDBAccordionItem collapseId={1} headerTitle="Business Development">
              <BusinessDev />
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle="Digital Marketer">
              <DigitalMarketer />
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              headerTitle="Digital Marketing Trainer"
            >
              <Trainers />
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={4}
              headerTitle="Customer Support Specialist"
            >
              <Customer />
            </MDBAccordionItem>
          </MDBAccordion>
          <div className={css.call}>
            {/* <Schedule/> */}

            <div className={css.button} onClick={openGoogleForm}>
              Apply Now
            </div>
            <br/>
            <br/>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Hiring;
