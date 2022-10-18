import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <footer class="footer">
        <div class="container section section-footer">
          <div class="footer-about">
            <h3 class="footer-headings">About</h3>
            <p>Come join us!</p>
          </div>

          <div class="footer-links">
            <h3 class="footer-headings">Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class="footer-services">
            <h3 class="footer-headings">Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Mern Project</li>
              <li>Online Classes</li>
              <li>Youtube Channel</li>
            </ul>
          </div>

          <div class="footer-question">
            <h3 class="footer-headings">Have a question</h3>
            <ul>
              <li>Delhi, India</li>
              <li>9999000012</li>
              <li>abc@yahoo.com</li>
            </ul>
          </div>
        </div>

        <div class="container section-socials">
          <a href="/">
            <i class="fab fa-discord fa-2x icons"></i>
          </a>

          <a href="/">
            <i class="fa-brands fa-youtube fa-2x icons"></i>
          </a>

          <a href="/">
            <i class="fa-brands fa-facebook fa-2x icons"></i>
          </a>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  a {
    text-decoration: none;
    color: black;
  }
  .footer {
    background: rgb(0 10 45);
    padding: 2rem;
  }

  .section-footer {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
  }

  .footer-about p {
    color: #fff;
  }

  .footer-links ul li {
    list-style: none;
    color: #fff;
  }

  .footer-links ul li:not(:last-child) {
    margin-bottom: 8px;
  }

  .footer-services ul li {
    list-style: none;
    color: #fff;
  }

  .footer-services ul li:not(:last-child) {
    margin-bottom: 8px;
  }

  .footer-question ul li {
    list-style: none;
    color: #fff;
  }

  .footer-question ul li:not(:last-child) {
    margin-bottom: 8px;
  }

  .footer-headings {
    margin-bottom: 10px;
    color: #fff;
  }

  .section-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 3rem;
  }

  .icons {
    color: #fff;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgb(144, 172, 209, 20%);
    border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
    animation: water-wave 3s linear infinite;
  }

  .icons::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
    border: 1px solid #fff;
    transform: translate(-50%, -50%);
    animation: water-wave 3s linear infinite;
  }

  .section-scrollTop {
    position: relative;
    cursor: pointer;
  }

  .scrollWrapper {
    z-index: 99;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0 10 45);
    border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
    animation: water-wave 3s linear infinite;
  }

  .scrollWrapper i {
    color: #fff;
  }

  @keyframes water-wave {
    0% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
    }

    50% {
      border-radius: 3% 97% 15% 85% / 72% 0% 100% 28%;
    }

    100% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
    }
  }
`;

export default Footer;
