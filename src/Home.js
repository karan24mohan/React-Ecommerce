import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

function Home() {
  const data = {
    name: "Karan Store",
  };
  return (
    <>
      <HeroSection myData={data} />;
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
