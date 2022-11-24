import React from "react";
import HeroSection from "./Components/HeroSection";
// import { useProductContext } from "./productContext";

function About() {
  // const { myName } = useProductContext();

  const data = {
    name: "Karan Ecommerce",
  };

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />;
    </>
  );
}

export default About;
