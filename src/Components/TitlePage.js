import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";

const TitlePage = ({ TitlePageRef, offset }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Container className={mediaQuery && "media-query"} ref={TitlePageRef}>
      <Title>
        <h1
          className="first-name"
          style={{ transform: `translateY(${offset * 1.2}px)` }}
        >
          Riley
        </h1>
        <h1
          className="last-name"
          style={{
            transform: `translateY(${offset * 1.05}px)`,
          }}
        >
          McMaster
        </h1>
      </Title>
      <SkillsCard style={{ transform: `translateY(${offset * 1.2}px)` }}>
        <h2>Full-stack Web Developer</h2>
        <p>
          React, Redux, JavaScript, Node, Express, Mongoose, MongoDB, CSS &
          HTML5
        </p>
      </SkillsCard>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("https://res.cloudinary.com/bodyofwater/image/upload/v1620753917/Portolio/BG%20image/prismatic-lake_vhwukm.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  @media only screen and (max-device-width: 700px) {
    background-attachment: scroll;
  }
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: var(--accent-bg-color);
  h1 {
    color: var(--primary-color);
    &.first-name {
      text-shadow: 2px 0 5px rgba(0, 0, 0, 0.4), 0 -2px 15px rgba(0, 0, 0, 0.2);
    }
    &.last-name {
      text-shadow: 2px -2px 5px rgba(0, 0, 0, 0.4),
        0 -2px 15px rgba(0, 0, 0, 0.2);
    }
  }
  &.media-query {
    h1 {
      font-size: 4rem;
      &.first-name {
        text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
          0 -2px 5px rgba(0, 0, 0, 0.1);
      }
      &.last-name {
        text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
          0 -2px 5px rgba(0, 0, 0, 0.1);
      }
    }
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 900px;
  margin-top: 5rem;
  margin-left: 5%;
`;

const SkillsCard = styled.div`
  max-width: 900px;
  z-index: 0;
  color: var(--accent-bg-color);
  background-color: var(--primary-color);
  position: absolute;
  padding: 1rem;
  margin: 0 5%;
  bottom: 10vh;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4), 2px 2px 15px rgba(0, 0, 0, 0.2);
  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

export default TitlePage;
