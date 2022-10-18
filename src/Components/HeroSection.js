import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-columns">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quasi autem facere provident sint ipsa id doloribus commodi nisi?
              Velit aliquid eos mollitia sequi? Esse dolorum inventore provident
              officia perspiciatis?
            </p>
            <NavLink to="/products">
              <Button>Shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="/images/hero.jpg" alt="HeroImage" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 10rem;
  .intro-data {
    margin-bottom: 0rem;
    color: lightslategray;
  }
  .hero-section-data h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  .hero-section-data p {
    font-size: 16px;
  }
  .hero-section-image {
    width: 100%;
    box-shadow: 1.5rem -1.5rem 0 0 rgb(132 144 255);
  }
  .hero-section-image img {
    width: 100%;
  }
`;

export default HeroSection;
