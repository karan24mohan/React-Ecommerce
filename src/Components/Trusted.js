import React from "react";
import styled from "styled-components";

function Trusted() {
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted by 1000+ Companies</h3>
        <div className="brand-section-wrapper">
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 3rem 8rem;
  background-color: #ececec;

  h3 {
    font-size: 26px;
    text-align: center;
  }

  .brand-section-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin-top: 8%;
  }

  .slide {
    width: 15%;
  }

  .slide img {
    width: 100%;
  }
`;

export default Trusted;
