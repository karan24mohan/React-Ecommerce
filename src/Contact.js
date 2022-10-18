import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h2>Contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.176940602503!2d77.26083777362082!3d28.635928451786345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac7381f671%3A0x531f06064145554a!2sLaxmi%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1666084685696!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, margin: "auto" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      <form
        action="https://formspree.io/f/myyvdzol"
        method="POST"
        className="contactForm"
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Name"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter Email"
          autoComplete="off"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter Message"
          autoComplete="off"
        ></textarea>
        <input type="submit" name="submit" value="Submit" id="submit" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 10rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .contactForm {
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0rem;
  }

  input {
    padding: 0.5rem 1rem;
  }

  textarea {
    padding: 0.5rem 1rem;
  }

  #submit {
    text-decoration: none;
    max-width: auto;
    background-color: rgb(98 84 243);
    color: rgb(255 255 255);
    padding: 0.5rem 0.5rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    &:hover,
    &:active {
      /* box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%); */
      transform: scale(0.96);
    }
    a {
      text-decoration: none;
      color: rgb(255 255 255);
      font-size: 1.8rem;
    }
  }
`;

export default Contact;
