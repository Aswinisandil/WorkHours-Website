import React from "react";
import css from "./Trainers.module.css";

const Trainers = () => {
  return (
    <>
      <div className={css.MarkettingContainer}>
        <div className={css.sec1}>
          <h1>Digital Marketing Trainer</h1>
          <h4>
            Subject: Elevate Your Agency: A 3-Month Transformation with
            Workhours
          </h4>
          <br/>

          <p className={css.pointhead}>🚀About Us:</p>
          <p className={css.graph}>
            Workhours is a dynamic and rapidly growing ed-tech firm dedicated to
            transforming lives through education and digital skills. We empower
            individuals to become self-employed, while also providing
            opportunities to build and lead their own teams. With a strong focus
            on digital marketing and specialized skill development, we are on a
            mission to create entrepreneurs who not only excel in the digital
            realm but also create job opportunities for others.
          </p>
        </div>

        <div className={css.sec2}>
          <p className={css.pointhead}>🌟 Roles & Responsibilities:</p>
          <p className={css.graph}>
            - Deliver engaging and informative digital marketing training
            sessions to students, covering topics such as SEO, SEM, social
            media, content marketing, and more.
            <br />
            - Develop and update training materials, including presentations,
            tutorials, and hands-on exercises.
            <br />
            - Assess student performance and provide feedback to help them
            improve their digital marketing skills.
            <br />
            - Stay updated on industry trends and changes, ensuring that
            training content remains current and relevant.
            <br />
            - Collaborate with the curriculum development team to enhance course
            materials and content.
            <br />- Serve as a mentor and guide for students, providing support
            and encouragement throughout their learning journey.
          </p>

          <p className={css.pointhead}>🔥 Skills and Qualifications:</p>
          <p className={css.graph}>
            - Proven expertise in digital marketing, with a track record of
            successful campaigns and strategies.
            <br />
            - Strong teaching and communication skills, with the ability to make
            complex digital marketing concepts understandable.
            <br />
            - Proficiency in using digital marketing tools and platforms,
            including Google Ads, Google Analytics, social media management
            tools, and email marketing software.
            <br />
            - Up-to-date knowledge of industry trends and best practices.
            <br />- Strong organizational skills to manage training schedules
            and materials effectively. - Patience and a passion for teaching and
            empowering others.
          </p>

          <p className={css.pointhead}>🎓 Education:</p>
          <p className={css.graph}>
            - A bachelor's degree in marketing, business, or a related field is
            preferred. Relevant certifications in digital marketing are a plus.
          </p>

          <p className={css.pointhead}>💼 Compensation:</p>
          <p className={css.graph}>
            In addition to a competitive base salary, we offer opportunities for
            professional growth and development. Your contribution to our
            mission will be recognized and rewarded.
          </p>

          <p className={css.graph}>
            We are looking for individuals who are enthusiastic, dedicated, and
            eager to help others succeed in the digital marketing space. If you
            have the skills and passion to excel in this role, we encourage you
            to apply and join us in this exciting journey of self-employment
            empowerment at Workhours.
          </p>

         

          <div className={css.regards}>
            <div className={css.regardsBox}>
              <p className={css.graph}>Best regards,</p>
              <p className={css.graph}>Veerander Chowdary</p>
              <p className={css.graph}>Founder & CEO</p>
              <p className={css.graph}>Workhours.in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
