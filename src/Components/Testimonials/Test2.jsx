import React from "react";
import css from "./Test2.module.css";
import t1 from "../../Resources/t1.avif";
import t2 from "../../Resources/t2.avif";
import t3 from "../../Resources/t3.avif";
import t4 from "../../Resources/t4.avif";
import t5 from "../../Resources/t5.avif";
import t6 from "../../Resources/t6.avif";
import Fade from "../../Components/Testimonials/FadeCarousel";

const Test2 = () => {
  return (
    <>
      <div className={css.t2Container}>
        <div className={css.t2inner}>
          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t1} alt="Testimonial1" />
              </div>

              <h3 className={css.name}>HAINAL</h3>
              <h3>5,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t2} alt="Testimonial2" />
              </div>

              <h3 className={css.name}>BENJIMIN</h3>
              <h3>3,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t3} alt="Testimonial3" />
              </div>

              <h3 className={css.name}>SANDRA</h3>
              <h3>2,00,000/-</h3>
            </div>
          </div>
        </div>

        <div className={css.t2inner}>
          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t4} alt="Testimonial1" />
              </div>

              <h3 className={css.name}>CHANDRASEKHAR</h3>
              <h3>2,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t5} alt="Testimonial2" />
              </div>

              <h3 className={css.name}>DIWI</h3>
              <h3>2,00,000/-</h3>
            </div>

            <div className={css.card}>
              <div className={css.cardimage}>
                <img src={t6} alt="Testimonial3" />
              </div>

              <h3 className={css.name}>ROHITH</h3>
              <h3>1,50,000/-</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={css.mobileCont}>
        <div className={css.mobileContinner}>
          <div className={css.t2inner}>
            <div className={css.cards}>
              <div className={css.cardLeft}>
                <div className={css.cardimage}>
                  <img src={t1} alt="Testimonial1" />
                </div>

                <h3 className={css.name}>HAINAL</h3>
                <h3>5,00,000/-</h3>
              </div>

              <div className={css.cardRight}>
                <div className={css.cardimage}>
                  <img src={t2} alt="Testimonial2" />
                </div>

                <h3 className={css.name}>BENJIMIN</h3>
                <h3>3,00,000/-</h3>
              </div>
            </div>
          </div>

          <div className={css.t2inner}>
            <div className={css.cards}>
              <div className={css.cardLeft}>
                <div className={css.cardimage}>
                  <img src={t3} alt="Testimonial3" />
                </div>

                <h3 className={css.name}>SANDRA</h3>
                <h3>2,00,000/-</h3>
              </div>

              <div className={css.cardRight}>
                <div className={css.cardimage}>
                  <img src={t4} alt="Testimonial1" />
                </div>

                <h3 className={css.name}>CHANDRASEKHAR</h3>
                <h3>2,00,000/-</h3>
              </div>
            </div>
          </div>

          <div className={css.t2inner}>
            <div className={css.cards}>
              <div className={css.cardLeft}>
                <div className={css.cardimage}>
                  <img src={t5} alt="Testimonial2" />
                </div>

                <h3 className={css.name}>DIWI</h3>
                <h3>2,00,000/-</h3>
              </div>

              <div className={css.cardRight}>
                <div className={css.cardimage}>
                  <img src={t6} alt="Testimonial3" />
                </div>

                <h3 className={css.name}>ROHITH</h3>
                <h3>1,50,000/-</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test2;
