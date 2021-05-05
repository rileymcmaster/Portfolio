import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";

const TitlePage = ({ TitlePageRef, offset }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Container className={mediaQuery && "media-query"} ref={TitlePageRef}>
      <Title>
        <h1 style={{ transform: `translateY(${offset * 1.2}px)` }}>Riley</h1>
        <h1
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
          React, Redux, JavaScript, Node, Express, Mongoose, MongoDB, CSS, HTML5
        </p>
      </SkillsCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: var(--accent-bg-color);
  &.media-query {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
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
  h1 {
    color: var(--primary-color);
    text-shadow: 0 0 10px var(--accent-bg-color);
  }
`;

const SkillsCard = styled.div`
  max-width: 900px;
  z-index: 0;
  color: var(--primary-color);
  position: absolute;
  margin-left: 5%;
  bottom: 20%;
  left: 0;
  width: 100%;
  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

export default TitlePage;
