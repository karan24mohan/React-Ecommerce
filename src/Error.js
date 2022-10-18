import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

function Error() {
  return (
    <Wrapper>
      <h2>404</h2>
      <h3>UH HO! YOU GOT LOST</h3>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <NavLink to="/home">
        <Button>Home</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 8rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export default Error;
