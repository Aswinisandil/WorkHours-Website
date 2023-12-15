import React from "react";
import css from "./DigitalMarketer.module.css";

const DigitalMarketer = () => {
  return (
    <>
      <div className={css.MarkettingContainer}>
        <div className={css.sec1}>
          <h1> Digital Marketer</h1>
          <h4>
            Join Our Team: Hiring Passionate Digital Marketing Professionals at
            Workhours.
          </h4>

          <p className={css.pointhead}>🚀About Us:</p>
          <p className={css.graph}>
            Workhours is an innovative and rapidly growing ed-tech company
            dedicated to empowering individuals with the skills and knowledge
            needed to thrive in the digital world. We specialize in digital
            marketing and self-employment courses, creating opportunities for
            people to become entrepreneurs and leaders in the online space.
          </p>
        </div>

        <div className={css.sec2}>
          <p className={css.pointhead}>🌟 Roles & Responsibilities:</p>
          <p className={css.graph}>
            - Develop and execute effective digital marketing strategies to
            drive brand awareness and revenue growth.
            <br />
            - Plan and manage digital marketing campaigns, including SEO, SEM,
            email marketing, social media, and content marketing.
            <br />
            - Create, curate, and optimize content for various digital platforms
            to engage and attract target audiences.
            <br />
            - Analyze and report on the performance of digital marketing
            efforts, using data and analytics to make data-driven decisions.
            <br />
            - Collaborate with cross-functional teams to ensure cohesive
            messaging and branding across all digital channels.
            <br />
            - Stay updated on industry trends and emerging digital marketing
            technologies to implement best practices.
            <br />
          </p>

          <p className={css.pointhead}>🔥 Skills and Qualifications:</p>
          <p className={css.graph}>
            - Proven experience in digital marketing, with a track record of
            successful campaigns and strategies.
            <br />
            - Proficiency in using digital marketing tools and platforms,
            including Google Ads, Google Analytics, social media management
            tools, and email marketing software.
            <br />
            - Strong knowledge of SEO, SEM, and content marketing best
            practices.
            <br />
            - Excellent analytical and problem-solving skills, with the ability
            to interpret data and metrics.
            <br />
            - Creative thinking and the ability to generate innovative ideas for
            marketing campaigns.
            <br />
            -Strong communication skills and the ability to work collaboratively
            in a team.
            <br />- Knowledge of website development, design, and user
            experience is a plus.
          </p>

          <p className={css.pointhead}>🎓 Education:</p>
          <p className={css.graph}>
            A bachelor's degree in marketing, business, or a related field is
            preferred but not mandatory. Relevant certifications in digital
            marketing are a plus.
          </p>

          <p className={css.pointhead}>💼 Compensation:</p>
          <p className={css.graph}>
            In addition to a competitive base salary, we offer an attractive
            incentive program where successful digital marketers can earn a
            percentage of the revenue they contribute to generating.
          </p>

          <p className={css.graph}>
            We are seeking passionate digital marketers who are eager to make an
            impact in the digital marketing space. If you're ready to take your
            career to the next level and contribute to our mission of empowering
            individuals through digital skills, we encourage you to apply and
            join our team at Workhours.
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

export default DigitalMarketer;
