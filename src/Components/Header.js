import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <>
      <Navbar>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <NavLink to="">
              <img src="/images/logo.svg" alt="" />
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav gap-4 mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="cart-trolley-link">
                    <FiShoppingCart className="cart-trolley" />
                    <span className="cart-total-item">10</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>
    </>
  );
}

const Navbar = styled.section`
  .container-fluid {
    width: 80%;
  }
  .navbar-nav li a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
  .cart-trolley-link {
    position: relative;
  }
  .cart-trolley {
    position: relative;
  }
  .cart-total-item {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -8px;
    left: 16px;
    font-size: 0.9rem;
  }
`;

export default Header;
