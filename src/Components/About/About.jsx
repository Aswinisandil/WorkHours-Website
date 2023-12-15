import React from "react";
import css from "../About/About.module.css";
import heart from "../../Resources/love.avif";
import stars from "../../Resources/stars.avif";
import veeruLogo from "../../Resources/hlovru.avif";
import veeruImage from "../../Resources/veeruImage.avif";
import like from "../../Resources/like.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className={css.aboutSection}>
        <div className={css.about}>
          <div className={css.customers}>
            <div className={css.heart}>
              <img src={heart} alt="small-heart" />
            </div>
            <p>HAPPY CUSTOMERS</p>
          </div>
          <div className={css.rating}>100+</div>
          <div className={css.ratingStars}>
            <p>Rating :</p>
            <div className={css.stars}>
              <img src={stars} alt="stars" />
            </div>
          </div>
        </div>

        <div className={css.helloVeeru}>
          <div className={css.veerulogo}>
            <img src={veeruLogo} alt="HelloVeeru" />
          </div>
          <div className={css.names}>
            <h3>HelloVeeru</h3>
            <p>CEO & Founder</p>
          </div>
        </div>

        <div className={css.veeru}>
          <img src={veeruImage} alt="Veeru" />
        </div>

        <div className={css.follow}>
          <div className={css.bigheart}>
            <img src={heart} alt="big-heart" />
          </div>
          <div className={css.likeContainer}>
            <div className={css.like}>
              <img src={like} alt="like" />
            </div>
            <h3>Hello Veeru</h3>
          </div>
          <div className={css.subscribe}>FOLLOW & SUBSCRIBE</div>
          <div className={css.socialIcons}>
            <div className={css.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={css.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>

      <div className={css.aboutMobile}>

      <div className={css.veeru}>
          <img src={veeruImage} alt="Veeru" />
        </div>

        <div className={css.flex-2}>

        <div className={css.helloVeeru}>
          <div className={css.veerulogo}>
            <img src={veeruLogo} alt="HelloVeeru" />
          </div>
          <div className={css.names}>
            <h3>HelloVeeru</h3>
            <p>CEO & Founder</p>
          </div>
        </div>

        <div className={css.about}>
          <div className={css.customers}>
            <div className={css.heart}>
              <img src={heart} alt="small-heart" />
            </div>
            <p>HAPPY CUSTOMERS</p>
          </div>
          <div className={css.rating}>100+</div>
          <div className={css.ratingStars}>
            <p>Rating:</p>
            <div className={css.stars}>
              <img src={stars} alt="stars" />
            </div>
          </div>
        </div>

        </div>

       

      </div>
    </>
  );
};

export default About;
