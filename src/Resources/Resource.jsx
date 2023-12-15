import React from "react";
import image1 from "./scroll images/logo-1.png";
import image2 from "./scroll images/logo-2.png";
import image3 from "./scroll images/logo-3.png";
import image4 from "./scroll images/logo-4.png";
import image5 from "./scroll images/logo-5.png";
import image6 from "./scroll images/logo-6.png";
import image7 from "./scroll images/logo-7.png";
import image8 from "./scroll images/logo-8.png";
import image9 from "./scroll images/logo-9.png";
import image10 from "./scroll images/logo-10.png";
import css from "../Resources/Resource.module.css";

const Resources = () => {
  return (
    <div className={css.newspapers}>
      <div className={css.row}>
        <div className={css.paper}>
          <img src={image1} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image2} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image3} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image4} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image5} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image6} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image7} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image8} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image9} alt="imag" />
        </div>
        <div className={css.paper}>
          <img src={image10} alt="imag" />
        </div>
      </div>

      {/* mobile version */}

      <div className={css.rowMobile}>
        <div className={css.rowFlex}>
          <div className={css.row1}>
            <div className={css.paper}>
              <img src={image1} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image2} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image3} alt="imag" />
            </div>
          </div>

          <div className={css.row2}>
            <div className={css.paper}>
              <img src={image4} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image5} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image6} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image7} alt="imag" />
            </div>
          </div>

          <div className={css.row3}>
            <div className={css.paper}>
              <img src={image8} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image9} alt="imag" />
            </div>
            <div className={css.paper}>
              <img src={image10} alt="imag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
