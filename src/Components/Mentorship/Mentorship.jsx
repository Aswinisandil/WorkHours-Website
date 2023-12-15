import React from "react";
import css from "./Mentorship.module.css";
import { NavLink } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

const Mentorship = () => {
  const openGoogleForm = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe4I12H5vJXHz56NPw1Fv5TgoIBNG8Ow-_CTQHJJM8mbYb_pg/viewform";

    window.open(googleFormUrl, "_blank");
  };
  return (
    <>
      <div className={css.mentorContainer}>
        <div className={css.mentorship}>
          <h5>Schedule a call with us before the clocks hits ZERO</h5>
          <h2>Let's Build Your Success Story Together : Book Your Call Now</h2>
          <p>
            Don’t miss out on the opportunity to accelerate your financial
            success. Book a call now to discuss your revenue goals and start
            achieving them with our expert guidance
          </p>
          <div className={css.call}>
            <div className={css.schedule} onClick={openGoogleForm}>
              <div className={css.navlink}> SCHEDULE A CALL WITH US</div>
            </div>
          </div>
        </div>
      </div>
 
      <div className={css.mentorMobile}>
        <div className={css.mentorship1}>
          <p className={css.headx}>Personalised Mentorship : </p>
          <p className={css.heady}>Let's Build Your Success Story Together : Book Your Call Now</p>
          <p className={css.paragraph}>
            Don’t miss out on the opportunity to accelerate your financial
            success. Book a call now to discuss your revenue goals and start
            achieving them with our expert guidance
          </p>
          <div className={css.call1}>
          <div className={css.schedule1} onClick={openGoogleForm}>
              <div className={css.navlink}> SCHEDULE A CALL WITH US</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentorship;
