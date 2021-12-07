import React from "react";
import styled from "styled-components";

import {
  Wrapper,
  Section,
  IntroSection,
  BottomSection,
  LinkBar,
} from "./styledComponents";
import BackBtn from "./parts/BackBtn";

const FoodFeed = () => {
  return (
    <>
      <BackBtn />
      <Wrapper>
        <h1>FOOD FEED</h1>
        <LinkBar>
          <a target="blank" href="https://food-feed.netlify.app/">
            <h3>Live site</h3>
          </a>
          <a target="blank" href="https://github.com/rileymcmaster/Food-Feed">
            <h3>GitHub</h3>
          </a>
        </LinkBar>
        <IntroSection>
          <div>
            <Section className="intro">
              <p>
                I built this social network from scratch so that I could share
                my own modified and customized recipes with friends. Improve any
                recipe to suit your own tastes, easily edit any ingredient or
                step of the directions with the click of a button. Hit save and
                the recipe is now your own!
              </p>
            </Section>
            <Section className="technologies">
              <h3>Technologies used</h3>
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
        <Section className="card standalone marginTB">
          <h3>Motivation</h3>
          <p>
            I have been eating a vegan diet for over 5 years and I try to avoid
            tofu at all costs. Tofu seems to be <i>the</i> substitution that can
            turn any recipe vegan and that makes it difficult for me to find
            interesting and flavourful recipes. I’ve adapted many recipes from
            across the internet and needed a place to save and share them with
            friends. Food Feed was the solution!
          </p>
        </Section>

        <img
          className="landscape"
          src="https://res.cloudinary.com/bodyofwater/image/upload/v1620175882/FFstill2_klaepk.jpg"
          alt="desktop view of Food Feed"
        />
        <Section className="standalone marginT">
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

        <Section className="card standalone marginTB">
          <h3>Design</h3>
          <p>
            A mobile-first design was crucial as the intended audience is a user
            reading the recipe off their smartphones while cooking. The layout
            is clear and simple, with snap scrolling it is easily navigable by
            pinky finger, so that the user minimizes the handling of their
            device.
          </p>
        </Section>

        <BottomSection>
          <Section>
            <h3>Issues faced</h3>
            <p>
              Designing a simple layout with high-functionality was a big task
              to overcome. The end user experience was always at top of mind as
              being able to easily follow the recipe was the most important
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
        {/* <GithubLink link={"https://github.com/rileymcmaster/Food-Feed"} /> */}
      </Wrapper>
    </>
  );
};

export default FoodFeed;
