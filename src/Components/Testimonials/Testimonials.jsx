import React from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3/Test3";
import Footer from "../Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <Test1 />
      <Test2 />
      <Test3 />
      <Footer />
    </div>
  );
};

export default Testimonials;
