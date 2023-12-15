import React from "react";
import css from "./Customer.module.css";

const Customer = () => {
  return (
    <>
      <div className={css.MarkettingContainer}>
        <div className={css.sec1}>
          <h1>Customer Support Specialist</h1>
          <h4>
            Join Our Team: Hiring Passionate Customer Support Executive at
            Workhours
          </h4>

          <p className={css.pointhead}>🚀About Us:</p>
          <p className={css.graph}>
            Workhours is a dynamic and rapidly growing ed-tech firm dedicated to
            transforming lives through education and digital skills. We empower
            individuals to become self-employed and provide opportunities for
            them to build and lead their own teams. With a strong focus on
            digital marketing and specialized skill development, we are on a
            mission to create entrepreneurs who not only excel in the digital
            realm but also create job opportunities for others.
          </p>
        </div>

        <div className={css.sec2}>
          <p className={css.pointhead}>🌟 Roles & Responsibilities:</p>

          <p className={css.graph}>
            - Respond promptly to customer inquiries, providing exceptional
            support and assistance.
            <br />
            - Address and resolve customer concerns, questions, and issues
            through various communication channels, including phone, email,
            chat, and social media.
            <br />
            - Collaborate with the technical and content teams to provide
            accurate and helpful information to customers.
            <br />
            - Keep detailed records of customer interactions and transactions.
            <br />
            - Assist in ensuring the highest level of customer satisfaction
            through efficient and effective support.
            <br />- Identify opportunities for process and service improvements
            and suggest solutions.
          </p>

          <p className={css.pointhead}>🔥 Skills and Qualifications:</p>
          <p className={css.graph}>
            - Strong verbal and written communication skills to engage
            effectively with customers.
            <br />
            - Empathetic and patient, with the ability to handle challenging
            customer situations with professionalism.
            <br />
            - Proficiency in using customer support software and tools.
            <br />
            - Strong problem-solving skills and the ability to think on your
            feet.
            <br />
            -Strong organizational skills to keep track of customer inquiries
            and resolutions.
            <br />- Ability to adapt to evolving customer needs and
            expectations.
          </p>

          <p className={css.pointhead}>🎓 Education:</p>
          <p className={css.graph}>
            - A bachelor's degree in business, communications, or a related
            field is preferred, but not mandatory.
          </p>

          <p className={css.pointhead}>💼 Compensation:</p>
          <p className={css.graph}>
            In addition to a competitive base salary, we offer opportunities for
            professional growth and development. Your commitment to providing
            top-notch customer support will be recognized and rewarded.
          </p>

         
          <p className={css.graph}>
            We are looking for individuals who are enthusiastic, dedicated, and
            passionate about delivering exceptional customer support. If you
            have the skills and drive to excel in this role, we encourage you to
            apply and join us in this exciting journey of self-employment
            empowerment at Workhours.
          </p>

          

          <div className={css.regards}>
            <div className={css.regardsBox}>
              <p className={css.graph}>Best regards,</p>
              <p className={css.names}>Veerander Chowdary</p>
              <p className={css.graph}>Founder & CEO</p>
              <p className={css.graph}>Workhours.in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
