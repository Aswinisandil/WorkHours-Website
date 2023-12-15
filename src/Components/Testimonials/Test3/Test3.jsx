import React from "react";
import screenShots from "../../../Resources/testimonialscrenshots 1.png";
import css from "./Test3.module.css";
import { Carousel } from "bootstrap";
import SwipeToSlide from "../Carousel"


const Test3 = () => {
  return (
    <>
      <div className={css.Test3Container}>
       
       <h1>Hear it from the Learners.....</h1>

      <div className={css.screenshot}>
        <img src={screenShots} alt="Screen Shots"/>
      </div>
      
      </div>

      <div className={css.mobileTest3}>
        <h1>Hear it from the Learners</h1>
         < SwipeToSlide />
      </div>
    </>
  );
};

export default Test3;
