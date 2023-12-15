import React from "react";
import css from "./PrivacyPolicy.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {

    const email = 'Support@helloveeru.com'; 
    const handleEmailClick = () => {
      window.location.href = `mailto:${email}`;
    }
  return (
    <>  
     <Navbar/>
     
      <div className={css.privacyContainer}>   
        <div className={css.privacyContent}>
          <h1 className={css.heading}>Privacy Policy</h1>
          <p className={css.points}>PRIVACY POLICY</p>
          <p className={css.paragraph}>
            This privacy policy describes and gives a detailed analysis of the
            data, and the information that we use and store from a user. This
            Data Privacy Policy is solely created and is concerned with
            Helloveeru.com, an educational site that offers to help students
            learn digital marketing.{" "}
          </p>
          <p className={css.points}>To whom does this policy concern?</p>
          <p className={css.paragraph}>
            This policy concerns whoever registers to the website as a free
            Digital Marketing student, a paid DBA student and whoever has filled
            a form of registration for Helloveeru.com. Under the guidelines, we
            protect the privacy of each individual whose information is
            registered with the Learning management system of the platform.
          </p>

          <p className={css.points}>Contact Us.</p>
          <p className={css.paragraph}>
            You can easily contact <span className={css.email} onClick={handleEmailClick}>Support@helloveeru.com</span>  at any time you want
            to withdraw your consent to providing the data or the information
            for Helloveeru. This maybe in the form of emails, or any further
            notifications you may receive from the platform.
          </p>

          <p className={css.points}>Why Do We Collect Your Data</p>
          <p className={css.paragraph}>
            We collect the data of the registered users to send them the updates
            in the courses, the prices in the courses and the updates regarding
            the curriculum. A part of the curriculum involves emails and thus,
            the platform sends regular email reminders so as nobody misses the
            course updates.
          </p>

          <p className={css.points}>What Information do we store?</p>
          <p className={css.paragraph}>Personal Information</p>
          <p className={css.paragraph}>
            We get access to your personal information such as your email
            address and your mobile number when you give access to us. We use
            the same information to send you further updates on the course you
            have signed up for.
          </p>

          <p className={css.paragraph}>Payment Information</p>
          <p className={css.paragraph}>
            {" "}
            We have payment gateways from Instamojo, razorpay, paypal. We only
            store the information of your bank account so the payment is
            processed. We do not share, nor store your bank account details
            after the processing of your payment and the course access is given
            to you.
          </p>

          <p className={css.paragraph}>
            All direct payment gateways adhere to the standards set by PCI-DSS
            as managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.
          </p>
          <p className={css.paragraph}>
            PCI-DSS requirements help ensure the secure handling of credit card
            information by our site and related courses and its service
            providers.
          </p>

          <p className={css.points}>Use Of Information</p>

          <p className={css.paragraph}>
            We do not use your information or the data you have provided for the
            platform for other course purposes. The data you give access to will
            only be used to update you regarding the course and will only be
            used until you give us the consent.
          </p>

          <p className={css.points}>Third-Party Data Storage</p>
          <p className={css.paragraph}>
            We work with third parties to run the platform such as Thinkfic and
            Teachable. These two are the learning platforms that allow us to
            publish our courses and create a curriculum. When you register to
            Helloveeru as a learner, the platforms will store the data of the
            registered individual. As stated earlier, Helloveeru only uses the
            information for the above purposes and any further data breach will
            not be taken into account by team Helloveeru.
          </p>

          <p className={css.paragraph}>
            You can read more about the privacy policy of Thinkfic and Teachable
            Here
          </p>
          <p className={css.paragraph}>
            We also have payment gateways from PayPal, Instamojo, Razorpay to
            process the payment for the courses offered. The information of your
            bank accounts will only be stored until the payment is processed and
            further possession or any other usage of your financial information
            will not be responsible by Helloveeru.{" "}
          </p>
          <p className={css.paragraph}>
            You can read more about the privacy policy of Paypal, Instamojo,
            Razorpay here
          </p>

          <p className={css.points}>Withdrawal</p>
          <p className={css.paragraph}>
            You can, at any time after giving the consent to your information
            withdraw your consent. This can be done so by sending an email to
             <span className={css.email} onClick={handleEmailClick}>Support@helloveeru.com</span> {" "}
          </p>
          <p className={css.paragraph}>
            Once the consent is withdrawn, your stored data will be erased from
            the database of Helloveeru.
          </p>
          <p className={css.paragraph}>The rights to change</p>
          <p className={css.paragraph}>
            The rights to change the privacy policy of this website solely
            relies with Helloveeru adhering to the guidelines issued by the
            government of India which NDSAP. Do note that we will be legally
            bound to disclose any or all information withheld by the website if,
            and ever asked by the government of India.
          </p>

          <p className={css.paragraph}>Get more information on NDSAP here.</p>
          <p className={css.paragraph}>
            We reserve rights to change the policy on how we acquire the
            consent, data, how we store it and if we ever share it.{" "}
          </p>
          <p className={css.paragraph}>
            You will be duly notified of the new changes in the policy if and
            when the changes are made.
          </p>
          <p className={css.paragraph}>
            You can contact <span className={css.email} onClick={handleEmailClick}>Support@helloveeru.com</span> if you have any questions or
            any grievances regarding the policy structure.{" "}
          </p>
          <p className={css.paragraph}>
            By agreeing to this data privacy form, you agree that you have read
            and understood the policy and consent to sharing your data with
            Helloveeru.com{" "}
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
