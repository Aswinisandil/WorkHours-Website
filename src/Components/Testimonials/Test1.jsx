import React from "react";
import css from "./Test1.module.css";
import image1 from "../../Resources/harshit.avif";
import image2 from "../../Resources/samad.avif";
import image3 from "../../Resources/arphan.avif";
import Fade from "../../Components/Testimonials/FadeCarousel";
import stars from "../../Resources/stars.avif";

const Test1 = () => {
  return (
    <>
      <div className={css.test1Container}>
        <div className={css.innerContainer}>
          <h1>Testimonials</h1>
          <p>These are the Top Achievers of WorkHours</p>

          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={image1} alt="Testimonial1" />
              </div>

              <h3 className={css.name}>HARSHIT</h3>
              <h3>30,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={image2} alt="Testimonial2" />
              </div>

              <h3 className={css.name}>SYAD SAMAD</h3>
              <h3>20,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={image3} alt="Testimonial3" />
              </div>

              <h3 className={css.name}>ARPAN DAS</h3>
              <h3>20,00,000/-</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={css.mobileContainer}>
        <Fade />

        <div className={css.paragraphBox}>
          <h1 className={css.quotes1}>❝</h1>
          <p>
            In DBA Mastery Course you will learn Digital Marketing, Blogging,
            Affiliate Marketing, Freelancing & YouTube Mastery.
          </p>
          <div className={css.star}>
            <img src={stars} alt="rating"/>
          </div>
          <h1 className={css.quotes2}>❞</h1>
        </div>
      </div>
    </>
  );
};

export default Test1;
