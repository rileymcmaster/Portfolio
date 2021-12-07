import React from "react";
import styled from "styled-components";
import useMediaQuery from "../Utils/useMediaQuery";

const About = ({ AboutRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Wrapper ref={AboutRef}>
      <Container className={mediaQuery ? "media-query" : undefined}>
        <MainCard>
          <h1>About</h1>
          <AboutCard className={mediaQuery ? "media-query" : undefined}>
            <AboutText>
              <p>
                I'm Riley, I'm a web-developer, currently working as an
                instructor at Concordia University, among many other things
                (cyclist, musician, vegan chef) and I am fascinated by solving
                technical problems and seeing projects through from beginning to
                end.
              </p>
              <p>
                After working in the film industry for several years, I was
                eager to broaden my technical skills which brought me to web
                development. I already had a keen eye for visual details,
                experience with graphic design and the ability to quickly learn
                new computer programs. The challenges of coding are a perfect
                fit for my determination and creative problem-solving skills.
              </p>
            </AboutText>
          </AboutCard>
        </MainCard>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--third-color);
`;
const Container = styled.div`
  padding: var(--page-horizontal-padding) var(--page-vertical-padding);
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  h1 {
    color: var(--accent-bg-color);
    margin-top: 1rem;
    margin-bottom: 10vh;
  }
  .profile-picture {
    object-fit: cover;
    width: 300px;
    padding-bottom: 10px;
    height: 300px;
    border-radius: 50%;
  }
  &.media-query {
    padding: var(--page-horizontal-padding-mobile)
      var(--page-vertical-padding-mobile);
  }
`;
const MainCard = styled.div``;

const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  &.media-query {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding-right: 10px;
  p,
  a {
    color: white;
    line-height: 2;
    margin-bottom: 2em;
  }
  a {
    font-size: clamp(0.5em, calc(3 / 80 * 100vw), 1em);
  }
`;

export default About;
