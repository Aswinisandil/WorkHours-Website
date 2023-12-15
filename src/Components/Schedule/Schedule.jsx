import React from "react";
import css from "./Schedule.module.css";

const Schedule = () => {
  const openGoogleForm = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe4I12H5vJXHz56NPw1Fv5TgoIBNG8Ow-_CTQHJJM8mbYb_pg/viewform";

    window.open(googleFormUrl, "_blank");
  };
  return (
    <div>
      <div className={css.schedule}>
        <div className={css.growthFormIn}>
          <div className={css.button} onClick={openGoogleForm}>
            SCHEDULE A CALL WITH US
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
