import React from "react";
import { useLocation } from "react-router-dom";
import css from "./Courses.module.css";
import wim from "../../Resources/veeru poster copy 1.avif";
import free from "../../Resources/free dm poster copy.avif";

const Courses = () => {
  const openGoogleForm = () => {
    const googleFormUrl = "https://forms.gle/6WE2UUr4qUQ5dnBRA";

    window.open(googleFormUrl, "_blank");
  };

  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <>
          <div className={css.CoursesContainer}>
            <div className={css.CoursesBox}>
              {/* <h1 className={css.heading1}>Our Courses</h1> */}

              <h4 className={css.heading2}>COURSES FOR BOSSES</h4>
              <br />

              <div className={css.courses}>
                <div className={css.course}>
                  <div className={css.courseImage}>
                    <img src={wim} alt="Wordpress Income mastery" />
                  </div>
                  <div className={css.courseDetails}>
                    <h6>WordPress Income Mastery</h6>
                    <p className={css.para}>
                      60-days Challenge on Earning 60,000 per month recurring
                    </p>

                    <div className={css.details}>
                      <p>12 Weeks</p>
                      <p>Live Course</p>
                      <a
                        href="https://workhours.in/wordpress-income-mastery/"
                        className={css.read}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>

                <div className={css.course}>
                  <div className={css.courseImage}>
                    <img src={free} alt="Free Digital Marketting Course" />
                  </div>

                  <div className={css.courseDetails}>
                    <h6>Digital Marketing Live Course</h6>
                    <p className={css.para}>
                      Exclusive Live Online Certification Program (Free Course)
                    </p>

                    <div className={css.details}>
                      <p>4 Weeks</p>
                      <p>Live Course</p>
                      <a
                        href="https://workhours.in/free-digital-marketing-course/"
                        className={css.read}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css.CoursesContainerMobile}>
            <div className={css.course1}>
              {/* <h1 className={css.heading1}>Our Courses</h1> */}

              <h4 className={css.heading2}>COURSES FOR BOSSES</h4>

              <div className={css.course}>
                <div className={css.courseImage}>
                  <img src={wim} alt="Wordpress Income mastery" />
                </div>
                <div className={css.courseDetails}>
                  <h6>WordPress Income Mastery</h6>
                  <p className={css.para}>
                    60-days Challenge on Earning 60,000 per month recurring
                  </p>

                  <div className={css.details}>
                    <p>12 Weeks</p>
                    <p>Live Course</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.read}>
              <a href="https://workhours.in/wordpress-income-mastery/">
                READ MORE
              </a>
            </div>

            <div className={css.course2}>
              <div className={css.course}>
                <div className={css.courseImage}>
                  <img src={free} alt="Free Digital Marketting Course" />
                </div>

                <div className={css.courseDetails}>
                  <h6>Digital Marketing Live Course</h6>
                  <p className={css.para}>
                    Exclusive Live Online Certification Program (Free Course)
                  </p>

                  <div className={css.details}>
                    <p>4 Weeks</p>
                    <p>Live Course</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.read}>
              <a href="https://workhours.in/free-digital-marketing-course/">
                READ MORE
              </a>
            </div>
          </div>
        </>
      )}

      {location.pathname === "/courses" && (
        <>
          <div className={css.CoursesContainer}>
            <div className={css.CoursesBox}>
              <h1 className={css.heading1}>Our Courses</h1>

              <h4 className={css.heading2}>COURSES FOR BOSSES</h4>

              <div className={css.courses}>
                <div className={css.course}>
                  <div className={css.courseImage}>
                    <img src={wim} alt="Wordpress Income mastery" />
                  </div>
                  <div className={css.courseDetails}>
                    <h6>WordPress Income Mastery</h6>
                    <p className={css.para}>
                      60-days Challenge on Earning 60,000 per month recurring
                    </p>

                    <div className={css.details}>
                      <p>12 Weeks</p>
                      <p>Live Course</p>
                      <a
                        href="https://workhours.in/wordpress-income-mastery/"
                        className={css.read}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>

                <div className={css.course}>
                  <div className={css.courseImage}>
                    <img src={free} alt="Free Digital Marketting Course" />
                  </div>

                  <div className={css.courseDetails}>
                    <h6>Digital Marketing Live Course</h6>
                    <p className={css.para}>
                      Exclusive Live Online Certification Program (Free Course)
                    </p>

                    <div className={css.details}>
                      <p>4 Weeks</p>
                      <p>Live Course</p>
                      <a
                        href="https://workhours.in/free-digital-marketing-course/"
                        className={css.read}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css.CoursesContainerMobile}>
            <div className={css.course1}>
              <h1 className={css.heading1}>Our Courses</h1>

              <h4 className={css.heading2}>COURSES FOR BOSSES</h4>

              <div className={css.course}>
                <div className={css.courseImage}>
                  <img src={wim} alt="Wordpress Income mastery" />
                </div>
                <div className={css.courseDetails}>
                  <h6>WordPress Income Mastery</h6>
                  <p className={css.para}>
                    60-days Challenge on Earning 60,000 per month recurring
                  </p>

                  <div className={css.details}>
                    <p>12 Weeks</p>
                    <p>Live Course</p>
                    
                  </div>
                </div>
              </div>

              <div className={css.read}>
                <a href="https://workhours.in/wordpress-income-mastery/">
                  READ MORE
                </a>
              </div>
            </div>

            <div className={css.course2}>
              <div className={css.course}>
                <div className={css.courseImage}>
                  <img src={free} alt="Free Digital Marketting Course" />
                </div>

                <div className={css.courseDetails}>
                  <h6>Digital Marketing Live Course</h6>
                  <p className={css.para}>
                    Exclusive Live Online Certification Program (Free Course)
                  </p>

                  <div className={css.details}>
                    <p>4 Weeks</p>
                    <p>Live Course</p>
                    
                  </div>
                </div>
              </div>

              <div className={css.read}>
                <a href="https://workhours.in/free-digital-marketing-course/">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Courses;
