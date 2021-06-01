import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";
import { useSpring, animated } from "react-spring";

const About = ({ AboutRef }) => {
  // breakpoint is 850px
  let mediaQuery = useMediaQuery();

  const config = { mass: 7, tension: 700, friction: 200 };

  const springProps = useSpring({
    config,
    delay: 200,
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
  });

  return (
    <Wrapper ref={AboutRef}>
      <Container className={mediaQuery && "media-query"}>
        <MainCard>
          <h1>About</h1>
          <AboutCard className={mediaQuery && "media-query"}>
            <AboutText>
              <p>
                Hey! I'm Riley, I'm a web developer, cyclist and musician and I
                like to turn everything I do into an art project. I am inspired
                to connect with people by interpreting my personal experiences
                into something tangible that other people can engage with.
              </p>
              <p>
                From making BMX videos with friends, photography zines, animated
                music videos and documenting my{" "}
                <a target="blank" href="https://www.instagram.com/localtarps">
                  daily commute
                </a>
                , I have a way of adapting my skill set to whatever challenge I
                want to overcome.
              </p>
              <p>
                I moved from Vancouver to Montreal looking for a new creative
                and technical challenge, which brought me to coding. All of my
                experience with graphic design and the workflow and
                intuitiveness of video editing translated instantly to building
                websites. I had all these ideas in the back of my mind that I
                didn't know how to execute which finally had an outlet.
              </p>
              <p>
                I'm a determined problem solver with a creative eye and I love
                collaborating and seeing projects through from idea to delivery!
              </p>
            </AboutText>
            <div>
              {/* <img
                className="profile-picture"
                src="https://res.cloudinary.com/bodyofwater/image/upload/v1620672475/IMG_4371_1000w_lwsvcl.jpg"
                alt="Riley"
              /> */}
            </div>
          </AboutCard>
        </MainCard>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 40px 20px 20px 20px;
  min-height: 100vh;
  background-color: var(--third-color);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  h1 {
    color: var(--accent-bg-color);
  }
  .profile-picture {
    object-fit: cover;
    width: 300px;
    padding-bottom: 10px;
    height: 300px;
    border-radius: 50%;
  }
  &.media-query {
    h1 {
      font-size: 6rem;
    }
  }
`;
const MainCard = styled.div``;

const Title = styled.div`
  overflow: hidden;
  z-index: 999999;
  h1 {
    color: var(--accent-bg-color);
  }
`;

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
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

export default About;
