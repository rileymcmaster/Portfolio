import React, { useState } from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ReactComponent as CVIcon } from "../assets/cv-logo.svg";

const Contact = ({ ContactRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();
  // change color of cv icon on hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      {/* CV */}
      <a
        target="blank"
        href={"https://read.cv/rileymcmaster"}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Icon isHovered={isHovered} className="read-icon">
          <CVIcon fill="var(--third-color)" />
        </Icon>
        <h2>rileymcmaster</h2>
      </a>
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
  overflow: hidden;
  /* overflow-x: hidden; */
  padding: 40px 20px 5rem 20px;
  min-height: 100vh;
  background-color: var(--third-color);
  h1 {
    color: var(--accent-bg-color);
    margin-bottom: 2rem;
  }
  h2 {
    margin-top: 15px;
    margin-left: 15px;
    color: var(--accent-bg-color);
    :hover {
      color: var(--primary-color);
    }
  }
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: var(--accent-bg-color);
    text-decoration: none;
  }
  a:hover,
  a:focus {
    outline: none;
    color: var(--primary-color);
  }
  &.media-query {
    h1 {
      font-size: 3rem;
    }
    h2 {
      margin-top: 2rem;
      margin-left: 0.5rem;
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
  &.read-icon {
    background-color: ${(props) =>
      props.isHovered ? "var(--primary-color)" : "var(--accent-bg-color)"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

export default Contact;
