import css from "./Subscribe.module.css";
import React, { useState } from 'react';
import axios from 'axios';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = formData;
      const response = await axios.post(
        "https://api.convertkit.com/v3/forms/3717879/subscribe",
        {
          api_key: "4RVHEx4WhpQhzH91b-sdIA",
          email,
        }
      );

      console.log("Subscription successful:", response.data);
    } catch (error) {
      console.error(
        "Error subscribing:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <>
    <div className={css.newsletter}>
    <h1 className={css.subscribe}>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubmit} className={css.formborder}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email address"
          required
        />
        <br/>

        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
     
    </>
  );
};

export default Subscribe;
