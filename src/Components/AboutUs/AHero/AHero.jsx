import React from "react";
import css from "../AHero/AHero.module.css";
import AboutUs from "../../../Resources/aboutuspng.avif";
import veeru from "../../../Resources/9.1element.avif";
import founder from "../../../Resources/9.2element.avif";
import paper1 from "../../../Resources/9.4element.avif";
import paper2 from "../../../Resources/9.5element.avif";
import paper3 from "../../../Resources/9.6element.avif";
import veeru1 from "../../../Resources/page-9elentsmobil.avif";
import founder1 from "../../../Resources/page-9.1elentsmobil.avif";
import Resources from "../../../Resources/Resource";
import Footer from "../../../Components/Footer/Footer"

const AHero = () => {
  return (
    <>
      <div className={css.AboutContainer}>
        <div className={css.AboutUs}>
          <img src={AboutUs} alt="About Us" />
        </div>

        <div className={css.ContainerFlex}>
          <div className={css.Content}>
          We will help you to reach 100,000 per month recurring in just 3 months
          </div>

          <div className={css.MobileContent}>
          We will help you to reach 100,000 per month recurring in just 3 months.
          </div>
          <div className={css.videoContent}>

            <iframe
              width="560"
              height="515"
              src="https://www.youtube.com/embed/Yxxo7BR9b8Q?si=WYLSU5u2IOLWkmoz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* statistics container starts*/}

      <div className={css.numbersMobileContainer}>
        <div className={css.numbersBox}>
          <div className={css.head}>
            <h3>OUR STATISTICS</h3>
          </div>
          <div className={css.numbers1}>
            <div className={css.flex}>
              <h1 className={css.down}>10Cr</h1>
              <h6 className={css.up}> 2YEARS</h6>
            </div>
            <div className={css.flex}>
              <h1 className={css.down}>17000+</h1>
              <h6 className={css.up}>COMMUNITY</h6>
            </div>

            <div className={css.flex}>
              <div className={css.flex2}>
                <h1>5</h1>
                <div className={css.flex3}>
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
      {/* Statistics container end */}

      <div className={css.FounderContainer}>
        <h3>ABOUT FOUNDER</h3>
        <div className={css.About}>
          <div className={css.founderImage}>
            <img src={veeru} alt="founder Image" />
          </div>
          <div className={css.founderAbout}>
            <img src={founder} alt="About Founder" />
          </div>
        </div>

        <div className={css.featuredC}>
          <h3>FEATURED ON</h3>
          <div className={css.featured}>
            <div className={css.featured1}>
              <img src={paper1} alt="NewsPaper Image" />
            </div>
            <div className={css.featured1}>
              <img src={paper2} alt="NewsPaper Image" />
            </div>
            <div className={css.featured1}>
              <img src={paper3} alt="NewsPaper Image" />
            </div>
          </div>
        </div>
      </div>

      <div className={css.FounderContainer1}>
        <h3>ABOUT FOUNDER</h3>
        <div className={css.About}>
          <div className={css.founderImage}>
            <img src={veeru1} alt="founder Image" />
          </div>
          <div className={css.founderAbout}>
            <img src={founder1} alt="About Founder" />
          </div>
        </div>

        <div className={css.featured}>
          <h3>FEATURED ON</h3>
          <div className={css.featured1}>
            <img src={paper1} alt="NewsPaper Image" />
          </div>
          <div className={css.featured1}>
            <img src={paper2} alt="NewsPaper Image" />
          </div>
          <div className={css.featured1}>
            <img src={paper3} alt="NewsPaper Image" />
          </div>
        </div>
      </div>
      <Resources />
      <Footer/>
    </>
  );
};

export default AHero;










