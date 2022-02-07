import React from "react";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

const TitlePage = ({ TitlePageRef }) => {
  // breakpoint is 700px

  return (
    <Container ref={TitlePageRef}>
      <Title>
        <h1 className="first-name">Riley</h1>
        <h1 className="last-name">McMaster</h1>
      </Title>
      <SkillsCardContainer>
        <SkillsCard>
          <h2>Full-stack</h2>
          <h2>Web Developer</h2>
        </SkillsCard>
      </SkillsCardContainer>
      <BackgroundImage />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-bg-color);

  min-height: 100vh;
  padding: 3rem 0;
  z-index: 0;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  position: relative;
  z-index: 99999;
  h1 {
    color: var(--primary-color);
    &.first-name {
      text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
        0 -2px 5px rgba(0, 0, 0, 0.1);
    }
    &.last-name {
      text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
        0 -2px 5px rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 768px) {
    h1 {
      &.first-name {
        text-shadow: 2px 0 5px rgba(0, 0, 0, 0.4),
          0 -2px 15px rgba(0, 0, 0, 0.2);
      }
      &.last-name {
        text-shadow: 2px -2px 5px rgba(0, 0, 0, 0.4),
          0 -2px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const SkillsCardContainer = styled.div`
  position: relative;
  z-index: 9999999;
  margin-top: auto;
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 0.5rem;

  background-color: var(--primary-color);
  color: var(--accent-bg-color);
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4), 2px 2px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 700px) {
    padding: 1rem;
    flex-direction: row;
    gap: 1rem;
  }
`;

export default TitlePage;
