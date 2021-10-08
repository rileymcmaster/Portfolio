import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery";
// icons
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const FoodFeed = () => {
  // breakpoint is 850px
  let mediaQuery = useMediaQuery();

  const history = useHistory();
  return (
    <>
      <BackIcon onClick={() => history.goBack()}>
        <BsArrowLeftShort size={50} />
      </BackIcon>
      <Wrapper className={mediaQuery ? "media-query" : undefined}>
        <Container>
          {/* TTITLE */}
          <h1>FOOD FEED</h1>
          <IntroSection className={mediaQuery ? "media-query" : undefined}>
            <div>
              {/* DESCRIPTION */}
              <Section className="intro">
                <p>
                  I built this social network from scratch so that I could share
                  my own modified and customized recipes with friends. Improve
                  any recipe to suit your own tastes, easily edit any ingredient
                  or step of the directions with the click of a button. Hit save
                  and the recipe is now your own!
                </p>
              </Section>
              {/* TECH USED */}
              <Section className="technologies">
                <h3 className={mediaQuery ? "media-query" : undefined}>
                  Technologies used
                </h3>
                <p>
                  React, Redux, JavaScript, Node, Express, Mongoose, MongoDB,
                  Cloudinary, CSS
                </p>
              </Section>
            </div>
            <img
              src="https://res.cloudinary.com/bodyofwater/image/upload/v1623080683/Portolio/Projects/Food%20Feed/Screencap7_4_rwqybd.gif"
              alt="GIF of FoodFeed's features"
            />
          </IntroSection>
          {/* MOTIVATION */}
          <Section className="card standalone marginTB">
            <h3>Motivation</h3>
            <p>
              I have been eating a vegan diet for over 5 years and I try to
              avoid tofu at all costs. Tofu seems to be <i>the</i> substitution
              that can turn any recipe vegan and that makes it difficult for me
              to find interesting and flavourful recipes. I’ve adapted many
              recipes from across the internet and needed a place to save and
              share them with friends. Food Feed was the solution!
            </p>
          </Section>
          {/* DESKTOP IMAGE */}
          <DesktopImageContainer>
            <img
              className="desktop-image"
              src="https://res.cloudinary.com/bodyofwater/image/upload/v1620175882/FFstill2_klaepk.jpg"
              alt="desktop view of Food Feed"
            />
          </DesktopImageContainer>
          {/* FEATURES */}
          <Section className="standalone">
            <h3>Features</h3>
            <ul>
              <li>Snap scrolling so the user can easily land on each page.</li>
              <li>Seamless style from viewing to editing modes.</li>
              <li>Link each variation of a recipe back to its original.</li>
              <li>
                Link and unlink particular ingredients to a specific direction
                page.
              </li>
              <li>User sign-up with encrypted password.</li>
              <li>User sign-in authentication with error handling.</li>
            </ul>
          </Section>

          {/* DESIGN */}

          <Section className="card standalone marginTB">
            <h3>Design</h3>
            <p>
              A mobile-first design was crucial as the intended audience is a
              user reading the recipe off their smartphones while cooking. The
              layout is clear and simple, with snap scrolling it is easily
              navigable by pinky finger, so that the user minimizes the handling
              of their device.
            </p>
          </Section>
          {/* ISSUES */}

          <BottomSection className={mediaQuery ? "media-query" : undefined}>
            <Section>
              <h3>Issues faced</h3>
              <p>
                Designing a simple layout with high-functionality was a big task
                to overcome. The end user experience was always at top of mind
                as being able to easily follow the recipe was the most important
                feature.
              </p>
              <p>
                I created the API of recipes over several iterations. Being able
                to link particular ingredients to a specific direction required
                using multiple array methods and nesting arrays within arrays of
                objects.
              </p>
            </Section>
            <img
              src="https://res.cloudinary.com/bodyofwater/image/upload/v1620178615/FFstill4_mz2pzk.jpg"
              alt="submit recipe screen"
            />
          </BottomSection>
          {/* GITHUB LINK */}
          <GitHubLink>
            <a
              target="blank"
              href={"https://github.com/rileymcmaster/Food-Feed"}
            >
              <AiFillGithub size={80} />
              <p>Link to repo</p>
            </a>
          </GitHubLink>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  padding: var(--page-horizontal-padding) var(--page-vertical-padding);
  min-height: 100vh;
  background-color: var(--primary-color);
  color: var(--accent-bg-color);
  h1 {
    font-size: 5rem;
    color: var(--accent-bg-color);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    display: inline-block;
    padding: 10px;
    margin-bottom: 0.5rem;
  }
  p,
  li {
    font-size: 1.2rem;
  }

  img {
    object-fit: contain;
    height: 400px;
    width: auto;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  }
  a:hover {
    color: white;
  }
  li {
    list-style-type: none;
  }
  ul {
    margin-left: 1.5rem;
  }
  &.media-query {
    padding: var(--page-horizontal-padding-mobile)
      var(--page-vertical-padding-mobile);
    h1 {
      font-size: 3rem;
      margin-top: 3rem;
    }
    h3 {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  max-width: 900px;
`;

const DesktopImageContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  max-width: 900px;
  img {
    width: 100%;
    height: auto;
  }
`;

const Section = styled.section`
  max-width: 900px;
  margin-right: 20px;
  line-height: 1.2;
  &.intro {
    background-color: var(--secondary-color);
    padding: 20px;
    color: var(--primary-color);
    line-height: 1.5;
  }
  &.technologies {
    margin-top: 1rem;
  }
  &.standalone {
    margin-bottom: 1rem;
  }
  &.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &.card > h3 {
    background-color: transparent;
    color: var(--secondary-color);
    margin-bottom: 0;
    padding: 0;
  }
  &.card > p {
    margin-top: 0;
    padding: 20px;
    border-bottom: 2px solid var(--secondary-color);
    border-top: 2px solid var(--secondary-color);
  }
  li {
    list-style: circle;
    line-height: 1.2;
    margin-bottom: 1.1rem;
  }
  &.marginTB {
    margin: 5rem 0;
  }
`;
const IntroSection = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &.media-query {
    flex-direction: column;
  }
  &.media-query > img {
    margin-top: 2rem;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 2rem;
  img {
    display: flex;
    margin-right: 2.5rem;
    max-height: 500px;
  }
  &.media-query {
    flex-direction: column;
  }
  &.media-query > img {
    margin-top: 2rem;
  }
  p ~ p {
    margin-top: 2rem;
  }
`;

const BackIcon = styled.div`
  margin: 10px;
  position: fixed;
  color: var(--third-color);
  :hover {
    color: white;
  }
`;

const GitHubLink = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: var(--secondary-color);
    text-decoration: none;
  }
  a:hover,
  a:focus {
    outline: none;
    color: var(--third-color);
  }
  p {
    margin-left: -5px;
  }
`;

export default FoodFeed;
