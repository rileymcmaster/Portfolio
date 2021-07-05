import React from "react";
import styled from "styled-components";
import useMediaQuery from "../Utils/useMediaQuery";

const About = ({ AboutRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Wrapper ref={AboutRef}>
      <Container className={mediaQuery && "media-query"}>
        <MainCard>
          <h1>About</h1>
          <AboutCard className={mediaQuery && "media-query"}>
            <AboutText>
              <p>
                Hey! I'm Riley, I'm a web developer, cyclist and musician and I
                like to turn everything I do into an art project. By translating
                my own experiences into something tangible, I am able to share
                my ideas in a way that others can engage with.
              </p>
              <p>
                From making BMX videos with friends as a teenager, to
                photography zines, animated music videos and documenting my{" "}
                <a target="blank" href="https://www.instagram.com/localtarps">
                  daily commute
                </a>
                , I have a way of adapting my skill set to whatever challenge I
                want to overcome.
              </p>
              <p>
                I recently moved from Vancouver to Montreal looking for a new
                creative and technical challenge, which brought me to coding.
                All of my experience with graphic design and the workflow and
                intuitiveness of video editing translated instantly to building
                websites. I had all these ideas in the back of my mind that I
                didn't know how to execute which finally had an outlet.
              </p>
              <p>
                I'm a determined problem solver with a creative eye and I love
                collaborating and seeing projects through from idea to delivery!
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
    line-height: 1.5;
    margin-bottom: 2em;
  }
  a {
    font-size: clamp(0.5em, calc(3 / 80 * 100vw), 1em);
  }
`;

export default About;
