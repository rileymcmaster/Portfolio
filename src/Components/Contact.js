import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "./useMediaQuery";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ReactComponent as CVIcon } from "../assets/cv-logo.svg";

const Contact = ({ ContactRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Container className={mediaQuery && "media-query"} ref={ContactRef}>
      <h1>CONTACT</h1>
      {/* GITHUB */}
      <LinkContainer className={mediaQuery && "media-query"}>
        <StyledLink
          className="regular-link"
          target="_blank"
          to={{ pathname: "https://github.com/rileymcmaster" }}
        >
          <div>
            <Icon>
              <AiFillGithub size={80} />
              <h2>rileymcmaster</h2>
            </Icon>
          </div>
        </StyledLink>
        {/* LINKEDIN */}
        <StyledLink
          className="regular-link"
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/rileymcmaster" }}
        >
          <Icon>
            <AiFillLinkedin size={80} />
            <h2>rileymcmaster</h2>
          </Icon>
        </StyledLink>
        {/* CV */}
        <CVLink
          to={{ pathname: "https://read.cv/rileymcmaster" }}
          target="_blank"
        >
          <div>
            <Icon className="cv-icon">
              <CVIcon fill="var(--third-color)" />
            </Icon>
            <h2 className="cv">rileymcmaster</h2>
          </div>
        </CVLink>
        {/* EMAIL */}
        <StyledLink
          target="_blank"
          to={{ pathname: "mailto:rileymcmaster@gmail.com" }}
        >
          <Icon>
            <MdEmail size={80} />
            <h2>rileymcmaster@gmail.com</h2>
          </Icon>
        </StyledLink>
      </LinkContainer>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 40px 20px 5rem 20px;
  background-color: var(--third-color);
  h1 {
    color: var(--accent-bg-color);
    margin-bottom: 2rem;
  }
  h2 {
    color: var(--accent-bg-color);
    margin-left: 15px;
  }
  h2.cv {
    margin-top: 15px;
  }
  a {
    text-decoration: none;
    color: var(--accent-bg-color);
  }
  a:hover,
  a:focus {
    outline: none;
  }
  &.media-query {
    h1 {
      font-size: 3rem;
    }
    h2 {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
    h2.cv {
      margin-top: 2rem;
    }
  }
`;
const LinkContainer = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  gap: 3rem;
  &.media-query {
    gap: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  clear: left;
  div {
    display: flex;
    flex-direction: row;
  }
  :hover,
  :focus {
    outline: none;
    color: var(--primary-color);
    h2 {
      color: var(--primary-color);
    }
  }
`;
const CVLink = styled(Link)`
  display: inline-block;
  clear: left;
  div {
    display: flex;
    flex-direction: row;
  }
  div > div {
    background-color: var(--accent-bg-color);
    border-radius: 50%;
    padding: 10px;
  }
  :hover > div > div {
    background-color: var(--primary-color);
  }
  :hover > div > h2 {
    color: var(--primary-color);
  }
`;

const Icon = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  /* margin-bottom: 3rem; */
  &.cv-icon {
    width: 80px;
    height: 80px;
  }
`;

export default Contact;
