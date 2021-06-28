import React from "react";
import styled from "styled-components";
import useMediaQuery from "../Utils/useMediaQuery";
import { useSpring, animated } from "react-spring";
import Slide from "react-reveal/Slide";
import prismaticBgImg from "../../assets/prismatic-lake.jpg";
// const prismaticBgImg = require("../../assets/prismatic-lake.jpg");

const TitlePage = ({ TitlePageRef, offset }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

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
    <Container
      style={{ backgroundImage: `url(${prismaticBgImg})` }}
      className={mediaQuery ? "media-query" : undefined}
      ref={TitlePageRef}
    >
      <Slide top>
        <Title style={springPropsTitle}>
          {mediaQuery ? (
            <>
              <h1 className="first-name">Riley</h1>
              <h1 className="last-name">McMaster</h1>
            </>
          ) : (
            <>
              <h1
                style={{ transform: parallaxEffects.title1 }}
                className="first-name"
              >
                Riley
              </h1>
              <h1
                style={{ transform: parallaxEffects.title2 }}
                className="last-name"
              >
                McMaster
              </h1>{" "}
            </>
          )}
        </Title>
      </Slide>
      <SkillsCardContainer style={springPropsSkillsCard}>
        <SkillsCard parallax={parallaxEffects}>
          <Slide bottom>
            <h2>Full-stack Web Developer</h2>
            <p>
              React, Redux, JavaScript, Node, Express, Mongoose, MongoDB, CSS &
              HTML5
            </p>
          </Slide>
        </SkillsCard>
      </SkillsCardContainer>
    </Container>
  );
};

const Container = styled.div`
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
  padding: var(--page-horizontal-padding) var(--page-vertical-padding);
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
    padding: var(--page-horizontal-padding-mobile)
      var(--page-vertical-padding-mobile);
    h1 {
      &.first-name {
        text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
          0 -2px 5px rgba(0, 0, 0, 0.1);
      }
      &.last-name {
        text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3),
          0 -2px 5px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Title = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 5rem;
`;

const SkillsCardContainer = styled(animated.div)`
  margin-top: auto;
`;

const SkillsCard = styled.div`
  @media (min-width: 700px) {
    transform: ${(props) => props.parallax.skillsCard};
  }
  max-width: 39rem;
  z-index: 0;
  color: var(--accent-bg-color);
  background-color: var(--primary-color);
  padding: 1rem;
  margin-top: auto;
  margin-bottom: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4), 2px 2px 15px rgba(0, 0, 0, 0.2);
  p {
    margin-top: 10px;
  }
`;

export default TitlePage;
