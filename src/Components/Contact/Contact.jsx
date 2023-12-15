import React from "react";
import css from "../Contact/Contact.module.css";
import Navbar from "../Navbar/Navbar";
import { SlLocationPin } from "react-icons/sl";
import { LuMail } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import Footer from "../Footer/Footer";
import Schedule from "../Schedule/Schedule";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={css.contactContainer}>
        <div className={css.content}>
          <h1 className={css.gradientBorder}>Contact Us</h1>
          <p className={css.connect}>CONNECT WITH US</p>
          <div className={css.talk}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4I12H5vJXHz56NPw1Fv5TgoIBNG8Ow-_CTQHJJM8mbYb_pg/viewform">
              Hey, Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className={css.Contact2}>
        <h1 className={css.first}>CONTACT US</h1>
        <h1 className={css.second}>Get In Touch</h1>
        <p className={css.contentp}>
          Have a question, need assistance, or just want to say hello? We're
          here for you. Drop us a message, and we'll get back to you as soon as
          possible.
        </p>
        <div className={css.contentp}>
          <div>
          Your journey to success starts with a simple hello. Say hello today,
          and let's kickstart your 10x earnings together!
          </div>
         
        </div>
        <p className={css.content2}>
          Your journey to success starts with a simple hello. Say hello today,
          and let's kickstart your 10x earnings together!
        </p>


        <div className={css.address}>
          <div className={css.location}>
            <SlLocationPin />
            <p className={css.locate}>
              108, Manjeera Majestic Commercial, Kphb Colony, Kukatpally,
              Hyderabad, Telangana.
            </p>
          </div>

          <div className={css.mail}>
            <LuMail />
            <p className={css.email}>support@workhours.in</p>
          </div>

          <div className={css.website}>
            <TbWorld />
            <p className={css.web}>https://workhours.in</p>
          </div>
        </div>

      </div>
      <br/>
      <br/>
      <Schedule />
     
      <Footer />
    </>
  );
};

export default Contact;
