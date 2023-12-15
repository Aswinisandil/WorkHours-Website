import React, { useState, useEffect } from "react";
import css from "../Hero/Hero.module.css";
import growth from "../../Resources/element10x earn.avif";

const Hero = () => {
  const openGoogleForm = () => {
    const googleFormUrl =
      "https://dm.helloveeru.com/live-digital-marketing-course";

    window.open(googleFormUrl, "_blank");
  };


  return (
    <>
      <div className={css.hero}>
        <h5>10x Earnings</h5>
        <span className={css.animationHeader}>Unlocking Earnings Through Learnings</span>
        <div className={css.animate}>
        <h6 className={css.hsix}>
        Our courses will not help you to get jobs, they will help you to provide jobs.      
        </h6>
        </div>
        <div className={css.button} onClick={openGoogleForm}>
          GET STARTED FOR FREE
        </div>
      </div>

      {/* Mobile Version Code */}

      <div className={css.heroMobile}>
        <div className={css.growth}>
          <img src={growth} alt="10x Growth" />
        </div>
        <span className={css.heading}>Unlocking Earnings Through Learnings.</span>
        <h6 className="hsix">
        Our courses will not help you to get jobs, they will help you to provide jobs.
        </h6>
        <div className={css.button} onClick={openGoogleForm}>
          GET STARTED FOR FREE
        </div>
      </div>
    </>
  );
};

export default Hero;
