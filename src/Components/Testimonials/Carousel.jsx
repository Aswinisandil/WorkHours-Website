import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Resources/tscreenshot1.avif";
import image2 from "../../Resources/tscreenshot2.avif";
import image3 from "../../Resources/tscreenshot3.avif";
import image4 from "../../Resources/tscreenshot4.avif";
import image5 from "../../Resources/tscreenshot5.avif";
import image6 from "../../Resources/tscreenshot6.avif";
import image7 from "../../Resources/tscreenshot7.avif";
import image8 from "../../Resources/tscreenshot8.avif";
import css from "../../Components/Testimonials/Carousel.module.css";

export default class SwipeToSlide extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true
            }
          }
        ]
      };
    return (
      <div className={css.CarouselContainer}>
        
        <Slider {...settings}>
          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image2} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image3} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image4} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image5} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image6} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image7} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image8} />
            </div>
          </div>

          <div className={css.ImageSlide}>
            <div className={css.image}>
              <img src={image1} />
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
