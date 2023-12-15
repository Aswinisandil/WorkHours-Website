import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Resources/harshit.avif";
import image2 from "../../Resources/samad.avif";
import image3 from "../../Resources/arphan.avif";
import css from "../Testimonials/FadeCarousel.module.css";

export default class Fade extends Component {
  render() {
    const settings = {
      //   dots: true,
      fade: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
    };
    return (
      <div className={css.CarouselContainer}>
        <div className={css.mobileInner}>
          <h1>Testimonials</h1>
          <p>These are the Top Achievers of WorkHours</p>

          <Slider {...settings}>
            <div className={css.Carousel}>
              <div className={css.card}>
                <div className={css.cardimage}>
                  <img src={image1} alt="Testimonial1" />
                </div>

                <h3 className={css.name}>HARSHIT</h3>
                <h3>30,00,000/-</h3>
              </div>
            </div>

            <div>
              <div className={css.card}>
                <div className={css.cardimage}>
                  <img src={image2} alt="Testimonial2" />
                </div>

                <h3 className={css.name}>SYAD SAMAD</h3>
                <h3>20,00,000/-</h3>
              </div>
            </div>

            <div>
              <div className={css.card}>
                <div className={css.cardimage}>
                  <img src={image3} alt="Testimonial3" />
                </div>

                <h3 className={css.name}>ARPAN DAS</h3>
                <h3>20,00,000/-</h3>
              </div>{" "}
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
