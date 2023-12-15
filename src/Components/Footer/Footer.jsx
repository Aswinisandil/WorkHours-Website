import React from "react";
import css from "../../Components/Footer/Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../../Resources/Workhours-logo.avif";
import Subscribe from "./Subscribe";

const Footer = () => {
  const openGoogleForm2 = () => {
    const googleFormUrl = "https://workshop.workhours.in/";

    window.open(googleFormUrl, "_blank");
  };

  return (
    <footer>

      <div className={css.footerBorder}>

   
      {/* <div className={css.footerTop}>
        <div className={css.footerLeft}>
          <div className={css.logo}>
            <img src={logo} alt="Work Hours logo" />
          </div>
          <p className={css.footerpara}>
            Unlock Your Potential with Workhours : Your Journey to
            Self-Employment Begins Here
          </p>
        </div>

        <div className={css.footerCenter}>
          <h3>Menu</h3>
          <ul>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>

            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>

            <li>
              <NavLink to="/hiring"> We're Hiring</NavLink>
            </li>
            <li>
              <div onClick={openGoogleForm2}>Workshop</div>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <a href="https://dm.helloveeru.com/live-digital-marketing-course">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <div className={css.footerRight}>        
          <Subscribe />
        </div>
      </div> */}

      <div className={css.footerBottom}>
        <div className={css.footerflex1}>
          <p>@2023, No Boss Technologies Private Limited. All Rights Reserved.</p>
        </div>

        {/* Social Icons */}

        <div className={css.footerflex2}></div>

        <div className={css.SocialIcons}>
          <a href="https://www.instagram.com/helloveeru/">
            <div className={css.icon}>
              <BsInstagram />
            </div>
          </a>
          <a href="https://twitter.com/hello_veeru">
            <div className={css.icon}>
              <FaTwitter />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/veeranderchowdary/">
            <div className={css.icon}>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://youtube.com/c/helloveeruchannel">
            <div className={css.icon}>
              <IoLogoYoutube />
            </div>
          </a>
        </div>

        <div className={css.footerflex3}>
          <div className={css.privacypolicy}>
            <NavLink to={"/privacypolicy"}>
              <div className={css.navlink}> Privacy Policy</div>
            </NavLink>
          </div>
          <div className={css.termsconditions}>
            <NavLink to={"/termsandconditions"}>
              <div className={css.navlink}> Terms and Conditions</div>
            </NavLink>
          </div>
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
