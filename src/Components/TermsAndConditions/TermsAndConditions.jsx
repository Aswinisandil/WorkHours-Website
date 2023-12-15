import React from "react";
import css from "./TermsAndConditions.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TermsAndConditions = () => {
  return (
    <>
     <Navbar/>

        <div className={css.privacyContainer}>
          <div className={css.privacyContent}>
            <h1 className={css.heading}>Terms & Conditions</h1>
            <p className={css.points}>TERMS AND CONDITIONS</p>
            <p className={css.paragraph}>
              Helloveeru is dedicated to making the careers of many aspiring
              digital marketers easier by providing everyone with a course that
              teaches them digital marketing with practical assignments to
              prepare them for a brighter career as digital marketers.
            </p>

            <p className={css.paragraph}>
              By agreeing to the terms and conditions of the document, you agree
              to the following terms and conditions of Helloveeru
            </p>

            <p className={css.paragraph}>
              Helloveeru, as a learning platform, can use your email address and
              your mobile number to send in promotional emails, updates
              regarding the course, and further developments.
            </p>

            <p className={css.paragraph}>
              “By submitting our Webform, you agree to receive promotional calls
              on the number shared, and such calls and SMS would be coming from
              a third party platform.”{" "}
            </p>

            <p className={css.paragraph}>
              You will be respectful at all times to the staff and to your
              fellow students who are taking the course with you.
            </p>
            <p className={css.paragraph}>
              The course states to provide you with assistance throughout your
              learning, you will never misuse the privileges given to you as a
              student of the course.
            </p>

            <p className={css.points}>Refund Policy</p>

            <p className={css.paragraph}>
              You will not be refunded once the course has been purchased and
              once you get access to the courses. This is an online course, And
              once the access is given to the course, there are many ways to get
              the content of the course and misuse it. The terms of the
              conditions explicitly state that there is no refund policy.
            </p>

            <p className={css.paragraph}>
              Asking for a refund policy will not be addressed more than once
              and you will only be notified to finish the course.
            </p>

            <p className={css.paragraph}>
              NOTE: These terms and conditions will apply to Workhours &
              HelloVeeru (No Boss Technologies Private Limited)
            </p>
           
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default TermsAndConditions;
