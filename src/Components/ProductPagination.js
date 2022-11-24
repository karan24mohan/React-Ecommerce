import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductPagination = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home </NavLink> / {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 1.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 1.2rem;
  }
`;
export default ProductPagination;
