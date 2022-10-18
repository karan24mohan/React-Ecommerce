import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-columns">
          <div className="service-1">
            <div>
              <TbTruckDelivery className="icons" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="service-2">
            <div className="service-column-2">
              <div>
                <MdSecurity className="icons" />
                <h3>Security</h3>
              </div>
            </div>
            <div className="service-column-2">
              <div>
                <GiReceiveMoney className="icons" />
                <h3>Money-back Gauranteed</h3>
              </div>
            </div>
          </div>
          <div className="service-3">
            <div>
              <RiSecurePaymentLine className="icons" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 10rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  .grid {
    gap: 4.8rem;
  }
  .service-1,
  .service-2,
  .service-3 {
    width: auto;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: azure;
    border-radius: 1rem;
  }
  .service-2 {
    gap: 4rem;
    border-radius: unset;
    background-color: transparent;
  }
  .service-column-2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: azure;
    border-radius: 1rem;
  }
  .service-1 h3 {
    font-size: 20px;
  }
  .service-3 h3 {
    font-size: 20px;
  }
  .service-column-2 h3 {
    font-size: 20px;
  }
  .icons {
    font-size: 25px;
    margin-bottom: 0.5rem;
  }
`;

export default Services;
