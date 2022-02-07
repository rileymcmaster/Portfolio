import React from "react";

import {
  Wrapper,
  Section,
  IntroSection,
  BottomSection,
  LinkBar,
} from "./styledComponents";
import BackBtn from "./parts/BackBtn";

const Seasons = () => {
  return (
    <>
      <BackBtn />
      <Wrapper>
        <h1>Seasons of Your Day</h1>
        <LinkBar>
          <a target="blank" href="https://www.bradhillworks.com/">
            <h3>Live site</h3>
          </a>
          <a
            target="blank"
            href="https://github.com/rileymcmaster/seasons-of-your-day"
          >
            <h3>GitHub</h3>
          </a>
          <a
            target="blank"
            href="https://www.figma.com/file/jjxzbSEqzWTQxvae120nun/Seasons?node-id=0%3A1"
          >
            <h3>Figma</h3>
          </a>
        </LinkBar>
        <IntroSection>
          <div>
            <Section className="intro">
              <p>
                In collaboration with photographer Brad Hill, Seasons of Your
                Day is an interactive multimedia web experience combining
                photography, music and video. The goal was to encourage the user
                to take their time exploring the content so that they will be
                rewarded by unexpected discoveries.
              </p>
            </Section>
            <Section className="technologies">
              <h3>Technologies used</h3>
              <p>React, Redux, Figma, React-Spring, intersection observer </p>
            </Section>
          </div>
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1638891605/Portolio/Projects/Seasons/Seasons6_xsqnkv.jpg"
            alt="Seasons of your day mobile view"
          />
        </IntroSection>
        <img
          className="landscape"
          src="https://res.cloudinary.com/bodyofwater/image/upload/v1638891613/Portolio/Projects/Seasons/Seasons0_2_hvea4c.jpg"
          alt="Seasons landing page"
        />
        <Section className="card standalone marginTB">
          <h3>Motivation</h3>
          <p>
            To present a collection of images in a more considered and complete
            way than many image sharing apps allow. The focus is on the story
            that all the images together tell, supported by the music and video.
            I wanted the user to have a chance to explore and discover details
            that aren't immediately obvious such as photos stacked on top of one
            another that must be cleared to reveal the next photo, handwritten
            notes on the backside of the photos, lines of poetry hiding
            underneath stacks, watching an image develop right in front of your
            eyes.
          </p>
        </Section>

        <BottomSection>
          <Section className="standalone">
            <h3>Features</h3>
            <ul>
              <li>Progressive image loading</li>
              <li>
                User interaction to engage with photos (double tap, swipe)
              </li>
              <li>Built in audio player</li>
              <li>
                Embedded video that automatically enters fullscreen on play
              </li>
              <li>Custom animations and reveals</li>
            </ul>
          </Section>
          <img
            className=""
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1638891693/Portolio/Projects/Seasons/Seasons4_2_kknwlf.jpg"
            alt=""
          />
        </BottomSection>
        <Section className="card standalone">
          <h3>Design</h3>
          <p>
            Mobile first, clean UI that invites user interaction. Multiple user
            interactions to keep users engaged: double photos to enlarge, swipe
            photos to reveal the next photo, text or video.
          </p>
        </Section>
      </Wrapper>
    </>
  );
};

export default Seasons;
