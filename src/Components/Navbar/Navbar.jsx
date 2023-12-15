import React, { useState } from "react";
import logo from "../../Resources/Workhours-logo.avif";
import css from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);

  const goHome = () => {
    const homePageUrl = "https://workhours.in/";
    window.open(homePageUrl);
  };

  const openGoogleForm2 = () => {
    const googleFormUrl = "https://workshop.workhours.in/";

    window.open(googleFormUrl, "_blank");
  };

  return (
    <>
      <div className={css.navbar1}>
        <div className={css.logo}>
          <NavLink to={"/"}>
            <img src={logo} alt="workhours-logo" />
          </NavLink>
        </div>
        <ul className={css.navbar}>
          <li>
            <NavLink to={"/about-us"}>
              <div className={css.navlink}> About Us</div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/testimonials"}>
              <div className={css.navlink}> Testimonials</div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/courses"}>
              <div className={css.navlink}>Courses</div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/hiring"}>
              <div className={css.navlink}> We're Hiring</div>
            </NavLink>
          </li>

          <li>
            <a onClick={openGoogleForm2}>
              <div className={css.navlink}>Workshop</div>
            </a>
          </li>

          <li>
            <NavLink to={"/contact"}>
              <li className={css.navlink}>Contact</li>
            </NavLink>
          </li>

          <li className={css.button}>
            <a href="https://dm.helloveeru.com/live-digital-marketing-course">
              Get Started
            </a>
          </li>
        </ul>
      </div>

      <div className={css.navMobile}>
        <div className={css.navigation}>
          <div className={css.logo}>
            <NavLink to={"/"}>
              <img src={logo} alt="workhours-logo" />
            </NavLink>
          </div>

          <header>
            <GiHamburgerMenu onClick={() => setshowNav(!showNav)} />
            {showNav && (
              <div className={css.sidenav}>
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
              </div>
            )}
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
