import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = ({ ContactRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();
  return (
    <Container className={mediaQuery && "media-query"} ref={ContactRef}>
      <h1>CONTACT</h1>
      {/* GITHUB */}
      <Icon>
        <a target="blank" href={"https://github.com/rileymcmaster"}>
          <AiFillGithub size={80} />
          <h2>rileymcmaster</h2>
        </a>
      </Icon>
      {/* LINKEDIN */}
      <Icon>
        <a target="blank" href={"https://www.linkedin.com/in/rileymcmaster/"}>
          <AiFillLinkedin size={80} />
          <h2>rileymcmaster</h2>
        </a>
      </Icon>
      {/* EMAIL */}
      <Icon>
        <a target="blank" href={"mailto:rileymcmaster@gmail.com"}>
          <MdEmail size={80} />
          <h2>rileymcmaster@gmail.com</h2>
        </a>
      </Icon>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  padding: 40px 20px 20px 20px;
  min-height: 100vh;
  background-color: var(--third-color);
  h1 {
    color: var(--accent-bg-color);
    margin-bottom: 2rem;
  }
  h2 {
    margin-top: 15px;
    margin-left: 15px;
  }
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }
  &.media-query {
    h1 {
      font-size: 3rem;
    }
    h2 {
      margin-top: 2rem;
      margin-left: 0;
      font-size: 1rem;
    }
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  vertical-align: center;
  align-items: center;
  margin-bottom: 3rem;
  a {
    color: var(--accent-bg-color);
    text-decoration: none;
  }
  a:hover,
  a:focus {
    outline: none;
    color: var(--primary-color);
  }
  /* h2 {
    margin-top: 15px;
    margin-left: 15px;
  } */
`;

export default Contact;
