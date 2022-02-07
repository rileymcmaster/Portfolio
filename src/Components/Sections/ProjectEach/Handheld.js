import React from "react";

import {
  Wrapper,
  Section,
  IntroSection,
  LinkBar,
  BottomSection,
} from "./styledComponents";
import BackBtn from "./parts/BackBtn";

const Handheld = () => {
  return (
    <>
      <BackBtn />
      <Wrapper>
        <h1>Hand Held Dot Org</h1>
        <LinkBar>
          <a target="blank" href="https://handheld-dotorg.netlify.app/">
            <h3>Live site</h3>
          </a>
          <a
            target="blank"
            href="https://github.com/rileymcmaster/handheld-org"
          >
            <h3>GitHub</h3>
          </a>
          <a
            target="blank"
            href="https://www.figma.com/file/fiI9Kripz0xuWFEbQ8iLfV/handheld?node-id=0%3A1"
          >
            <h3>Figma</h3>
          </a>
        </LinkBar>
        <IntroSection>
          <div>
            <Section className="intro">
              <p>
                A stripped back homepage to ease you in to your day at the
                computer. While displaying the basics: the weather, the date and
                a little pad to doodle on, the low contrast design along with
                the minimal content call back to the early capabilities of
                handheld devices such as Palm Pilots and other handheld
                organizers.
              </p>
            </Section>
            <Section className="technologies">
              <h3>Technologies used</h3>
              <p>
                React, React-Query, Styled-Components, React-Canvas-Draw,
                React-Tooltip, React-Transition-Group, DayJS, Figma
              </p>
            </Section>
          </div>
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1644170098/Portolio/Projects/Handheld/HHorg5_aoeozt.jpg"
            alt="hand held"
          />
        </IntroSection>
        <img
          className="landscape"
          src="https://res.cloudinary.com/bodyofwater/image/upload/v1644169884/Portolio/Projects/Handheld/HHorg1_yeynjk.jpg"
          alt="desktop view of Hand Held"
        />
        <Section className="card standalone marginTB">
          <h3>Motivation</h3>
          <p>
            This project started as an opportunity to learn about querying data
            which brought me to React-Query. I quickly realized how powerful of
            a tool that package is for managing global state, providing loading
            and erro states as well as automatically updating stale data.
          </p>
        </Section>

        <BottomSection>
          <Section className="standalone">
            <h3>Features</h3>
            <ul>
              <li>Query and cache state received from APIs</li>
              <li>API calls for current weather, forecast and random noun.</li>
              <li>
                Integrated packages for animation, drawing canvas and tooltips
              </li>
              <li>Tabbed navigation for mobile view</li>
              <li>Custom weather icons</li>
            </ul>
          </Section>
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1644169890/Portolio/Projects/Handheld/HHorg4_1_zdrwbj.jpg"
            alt=""
          />
        </BottomSection>
        <Section className="card standalone">
          <h3>Design</h3>
          <p>
            The design is meant to emulate a hand held organizer from the late
            90s. A clean, minimal look was really important to take opposition
            to the overstimulation commonly see elsewhere on the web.
          </p>
        </Section>
      </Wrapper>
    </>
  );
};

export default Handheld;
