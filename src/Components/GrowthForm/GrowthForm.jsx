import React from "react";
import css from "../GrowthForm/GrowthForm.module.css";
import growth10x from "../../Resources/element10x earn.avif";

const GrowthForm = () => {
  const openGoogleForm = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe4I12H5vJXHz56NPw1Fv5TgoIBNG8Ow-_CTQHJJM8mbYb_pg/viewform";

    window.open(googleFormUrl, "_blank");
  };
  return (
    <div className={css.growthContainer}>
      <div className={css.growthSec}>
        <div className={css.growth}>
          <img src={growth10x} alt={growth10x} />
        </div>

        <div className={css.GrowthForm}>
          <h1>Are You Ready For 10x Earnings ?</h1>
          <div className={css.growthFormIn} onClick={openGoogleForm}>
            <div className={css.button}>SCHEDULE A CALL WITH US</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthForm;
