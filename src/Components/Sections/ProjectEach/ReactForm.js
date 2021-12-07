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

const ReactForm = () => {
  return (
    <>
      <BackBtn />
      <Wrapper>
        <h1>React Form</h1>
        <LinkBar>
          <a target="blank" href="https://inspiring-kirch-10373d.netlify.app/">
            <h3>Live site</h3>
          </a>
          <a target="blank" href="https://github.com/rileymcmaster/react-form">
            <h3>GitHub</h3>
          </a>
          <a
            target="blank"
            href="https://www.figma.com/file/jadwrrrXhjyU1q11e0xCyX/SIA-form?node-id=0%3A1"
          >
            <h3>Figma</h3>
          </a>
        </LinkBar>
        <IntroSection>
          <div>
            <Section className="intro">
              <p>
                My goal was to build a form in React making use of controlled
                components. I implemented custom validation for all the fields,
                with distinct error messages for each field and three different
                messages for the email. The form is easily scalable, fully
                responsive, keyboard accessible. When all fields are validated,
                the form is submitted and pushes to a confirmation screen.
              </p>
            </Section>
            <Section className="technologies">
              <h3>Technologies used</h3>
              <p>React, Styled-Components, Figma</p>
            </Section>
          </div>
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1638914165/Portolio/Projects/React%20form/Screenshot-Mobile-2_mxcfyj.jpg"
            alt="React form"
          />
        </IntroSection>
        <img
          className="landscape"
          src="https://res.cloudinary.com/bodyofwater/image/upload/v1637785894/Portolio/Projects/Form/ScreenshotArtboard_1_copy_zpdxnz.jpg"
          alt="desktop view of Food Feed"
        />
        <Section className="card standalone marginTB">
          <h3>Design</h3>
          <p>
            I took design inspiration from an old Penguin Books paperback cover.
            I thought the simple colour scheme translated well to the UX of a
            form. Error messages really pop out with the vibrant red and bright
            whites to contrast the black on green colour scheme.
          </p>
        </Section>
      </Wrapper>
    </>
  );
};

export default ReactForm;
