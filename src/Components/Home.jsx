import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Mentorship from "../Components/Mentorship/Mentorship";
import OurNumbers from "./Numbers/OurNumbers";
import Frustrated from "../Components/Frustrated/Frustrated";
import Question from "./Question/Question";
import Footer from "../Components/Footer/Footer";
import GrowthForm from "./GrowthForm/GrowthForm";
import Courses from "./Courses/Courses";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mentorship />
      <OurNumbers/>
      <Frustrated/>
      <Courses/>
      <Question/>
      <GrowthForm/>
      <Footer/>
    </>
  );
};

export default Home;
