import React from "react";
import styled from "styled-components";
import useMediaQuery from "../Utils/useMediaQuery";
import { useSpring, animated } from "react-spring";
import Slide from "react-reveal/Slide";
import BackgroundImage from "./BackgroundImage";

const TitlePage = ({ TitlePageRef, offset }) => {
  // breakpoint is 700px
  const mediaQuery = useMediaQuery();

  const configTitle = { mass: 7, tension: 700, friction: 200 };
  const springPropsTitle = useSpring({
    config: configTitle,
    delay: 100,
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },
  });

  const configSkillsCard = { mass: 7, tension: 700, friction: 200 };

  const springPropsSkillsCard = useSpring({
    config: configSkillsCard,
    delay: 100,
    from: { opacity: 0, y: 500 },
    to: { opacity: 1, y: 0 },
  });

  const parallaxEffects = {
    title1: `translateY(${Math.round(offset * 1.2)}px)`,
    title2: `translateY(${Math.round(offset * 1.05)}px)`,
    skillsCard: `translateY(${Math.round(offset * 1.2)}px)`,
  };

  return (
    <Container ref={TitlePageRef}>
      <Title style={springPropsTitle}>
        <h1
          style={{
            transform: !mediaQuery ? parallaxEffects.title1 : undefined,
          }}
          className="first-name"
        >
          Riley
        </h1>
        <h1
          style={{
            transform: !mediaQuery ? parallaxEffects.title2 : undefined,
          }}
          className="last-name"
        >
          McMaster
        </h1>
      </Title>
      <SkillsCardContainer style={springPropsSkillsCard}>
        <SkillsCard parallax={parallaxEffects}>
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

const Title = styled(animated.div)`
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

const SkillsCardContainer = styled(animated.div)`
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
    transform: ${(props) => props.parallax.skillsCard};
    padding: 1rem;
    flex-direction: row;
    gap: 1rem;
  }
`;

export default TitlePage;
