import React from "react";
import HeroSection from "./Components/HeroSection";

function About() {
  const data = {
    name: "Karan Ecommerce",
  };
  return <HeroSection myData={data} />;
}

export default About;
