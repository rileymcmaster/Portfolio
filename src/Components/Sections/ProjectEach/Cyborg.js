import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery";
// icons
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Cyborg = () => {
  // breakpoint is 850px
  let mediaQuery = useMediaQuery();

  const history = useHistory();
  return (
    <>
      <BackIcon onClick={() => history.goBack()}>
        <BsArrowLeftShort size={50} />
      </BackIcon>
      <Container className={mediaQuery && "media-query"}>
        <h1>Cyborg Social Club</h1>
        <IntroSection className={mediaQuery && "media-query"}>
          <div>
            <Section className="intro">
              {/* INTRO */}
              <p>
                In an Agile team environment, we were tasked to build a
                storefront for a given API of wearable technologies. We made the
                most of our four day deadline with daily scrums and open
                communication. In the end, our collaboration yielded a fully
                functioning web-store.
              </p>
            </Section>
            {/* Technologies used */}
            <Section className="technologies">
              <h3 className={mediaQuery && "media-query"}>Technologies used</h3>
              <p>
                React, Redux, JavaScript, Node, Express, Mongoose, MongoDB, CSS
                & Stripe
              </p>
            </Section>
          </div>
          {/* Mobile image */}
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151131/CyborgStill1_ytbdw3.jpg"
            alt="mobile view of Cyborg Social Club"
          />
        </IntroSection>
        {/* My role  */}
        <Section className="card standalone">
          <h3>My role</h3>
          <p>
            I was tasked with handling the type-ahead search function, building
            a reusable, hoverable dropdown menu component, responsive navbar and
            front-end pagination.
          </p>
        </Section>
        {/* Team members */}
        <Section className="marginT">
          <h3>Team members</h3>
          <p>
            <a target="blank" href="https://github.com/Hajarelmouddene">
              Hajar El Mouddene,
            </a>{" "}
            <a target="blank" href="https://github.com/daniel-sciortino">
              Daniel Sciortino
            </a>{" "}
            <a target="blank" href="https://github.com/sarahghossen">
              & Sarah Ghossen
            </a>
          </p>
        </Section>
        {/* Desktop image */}
        <DesktopImageContainer>
          <img
            className="desktop-image"
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151614/CyborgStill2_xxcoye.jpg"
            alt="Desktop view of Cyborg social club"
          />
        </DesktopImageContainer>

        {/* DESIGN??? */}
        {/*  */}
        {/* Issues faced */}
        <BottomSection className={mediaQuery && "media-query"}>
          <Section>
            <h3>Issues faced</h3>
            <p className="indent">
              Live updating the feed based on filters to give an intuitive
              shopping experience. I used array methods to filter out all the
              other products and update the pagination instantly. I built
              reusable and adaptable components for the dropdowns and buttons.
            </p>
          </Section>

          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151613/CyborgStill3_nfup2p.jpg"
            alt="typeahead search function"
          />
        </BottomSection>
        {/* <LinkToRepo> */}
        <GitHubLink>
          <a
            target="blank"
            href={"https://github.com/rileymcmaster/cyborg-social-club"}
          >
            <AiFillGithub size={80} />
            <p>Link to repo</p>
          </a>
        </GitHubLink>
        {/* </LinkToRepo> */}
      </Container>
    </>
  );
};

const Container = styled.div`
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
  h3 {
    font-size: 1.5rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    display: inline-block;
    padding: 10px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
  }
  &.media-query {
    padding: var(--page-horizontal-padding-mobile)
      var(--page-vertical-padding-mobile);
    h1 {
      padding-top: 2rem;
    }
    h3 {
      width: 100%;
    }
  }
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
  /* margin-right: 20px; */
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
  }
  &.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &.card {
    padding: 0;
    margin: 3rem 0;
  }
  &.card > h3 {
    background-color: transparent;
    color: var(--secondary-color);
    margin-bottom: 0;
  }
  &.card > p {
    margin-top: 0;
    padding: 20px;
    border-bottom: 2px solid var(--secondary-color);
    border-top: 2px solid var(--secondary-color);
  }
  .indent {
    /* padding-left: 1rem; */
  }
  &.marginT {
    margin-top: 4rem;
  }
`;
const IntroSection = styled.div`
  max-width: 900px;
  display: flex;
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2rem;
  }
  &.media-query {
    flex-direction: column;
    div {
      margin-right: 0;
    }
  }
  &.media-query > img {
    margin-top: 2rem;
  }
`;

const BottomSection = styled.div`
  max-width: 900px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  img {
    margin-right: 2rem;
    max-height: 500px;
  }
  &.media-query {
    flex-direction: column;
  }
  &.media-query > img {
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

export default Cyborg;
