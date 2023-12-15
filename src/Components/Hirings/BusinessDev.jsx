import React from "react";
import css from "./BusinessDev.module.css";

const BusinessDev = () => {
  return (
    <div className={css.MarkettingContainer}>
      <div className={css.sec1}>
        <h1>Business Development Professionals.</h1>

        <h4>
          Join Our Team: Hiring Passionate Business Development Professionals at
          Workhours
        </h4>
        <br />
        
         <p className={css.pointhead}>🚀About Us:</p>
        <p className={css.graph}>
          Workhours is a dynamic and rapidly growing ed-tech firm
          dedicated to transforming lives through education and digital skills.
          We empower individuals to become self-employed, while also providing
          opportunities to build and lead their own teams. With a strong focus
          on digital marketing and specialized skill development, we are on a
          mission to create entrepreneurs who not only excel in the digital
          realm but also create job opportunities for others.
        </p>
      </div>

      <div className={css.sec2}>
        <p className={css.pointhead}>🌟 Roles & Responsibilities:</p>
        <p className={css.graph}>
          - Identify, target, and build strong relationships with potential
          clients and partners. <br />
          - Drive revenue growth by selling our range of digital marketing and
          self-employment courses. <br />
          - Develop and execute effective sales strategies, from prospecting to
          closing deals. <br />
          -Understand and cater to the unique needs of each client, providing
          them with tailored solutions. - Collaborate with the marketing and
          product teams to continuously improve our offerings based on market
          feedback. <br />- Manage a sales team, if in a managerial role, and
          provide leadership to achieve targets and goals.
        </p>

        <p className={css.pointhead}>🔥 Skills and Qualifications:</p>
        <p className={css.graph}>
          - Proven track record in business development, sales, or a related
          field, particularly within the ed-tech industry.
          <br />
          - Strong understanding of digital marketing and the digital skills
          landscape.
          <br />
          - Exceptional interpersonal and communication skills to build rapport
          with clients and close deals.
          <br />
          - Proficiency in using CRM tools and sales software to manage leads
          and measure performance.
          <br />
          - Strong leadership and team management skills for managerial
          positions.
          <br />
          - Ability to adapt to a fast-paced, evolving industry and provide
          solutions accordingly.
          <br />- Self-motivated, target-driven, and a passion for helping
          individuals and businesses succeed.
        </p>

        <p className={css.pointhead}>🎓 Education:</p>
        <p className={css.graph}>
          - A bachelor's degree in any field is acceptable, but relevant
          qualifications in business, marketing, or education can be an
          advantage.
        </p>

        <p className={css.pointhead}>💼 Compensation:</p>
        <p className={css.graph}>
          In addition to a competitive base salary, we offer an attractive
          incentive program where successful candidates can earn 7.5% of the
          income they generate through their sales efforts. This reflects our
          commitment to rewarding our business development professionals for
          their contribution to our success.
        </p>

        <br/>

        <p className={css.graph}>
          We are looking for individuals who are enthusiastic, dedicated, and
          eager to be part of a forward-thinking team that is shaping the future
          of education and entrepreneurship. If you have the skills and passion
          to excel in this role, we encourage you to apply and join us in this
          exciting journey of self-employment empowerment at Workhours.
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
  );
};

export default BusinessDev;
