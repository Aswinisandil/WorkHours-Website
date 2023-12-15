import React from "react";
import css from "../../Components/Numbers/OurNumbers.module.css";

const OurNumbers = () => {
  return (
    <>
      <div className={css.numbersContainer}>
        <div className={css.numbersBox}>
          <div className={css.head}>
            <h3>OUR NUMBERS</h3>
          </div>
          <div className={css.numbers1}>
            <div className={css.flex}>
              <h1>10Cr</h1>
              <h6> 2 YEARS</h6>
            </div>
            <div className={css.flex}>
              <h1>17000+</h1>
              <h6>COMMUNITY</h6>
            </div>
          </div>

          <div className={css.numbers2}>
            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>5</h1>
                <div>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>100+</h6>
            </div>
            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>6</h1>
                <div className={css.flex3}>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>70+</h6>
            </div>

            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>7</h1>
                <div>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>10+</h6>
            </div>
          </div>
          
        </div>
      </div>

      <div className={css.numbersMobileContainer}>
        <div className={css.numbersBox}>
          <div className={css.Mobilehead}>
            <h3>OUR NUMBERS</h3>
          </div>
          <div className={css.numbers1}>
            <div className={css.Mflex}>
              <h1>10Cr</h1>
              <h6> 2 YEARS</h6>
            </div>
            <div className={css.Mflex}>
              <h1>17000+</h1>
              <h6>COMMUNITY</h6>
            </div>

            <div className={css.Mflex}>
              <div className={css.Mflex2}>
                <h1>5</h1>
                <div>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>100+</h6>
            </div>
            <div className={css.Mflex}>
              <div className={css.Mflex2}>
                <h1>6</h1>
                <div className={css.Mflex3}>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>70+</h6>
            </div>

            <div className={css.Mflex}>
              <div className={css.Mflex2}>
                <h1>7</h1>
                <div>
                  <p className={css.p1}>Figure</p>
                  <p className={css.p2}>Income</p>
                </div>
              </div>

              <h6>10+</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurNumbers;
