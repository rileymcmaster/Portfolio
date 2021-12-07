import React from "react";

import {
  Wrapper,
  Section,
  IntroSection,
  BottomSection,
  LinkBar,
} from "./styledComponents";
import BackBtn from "./parts/BackBtn";

const Cyborg = () => {
  return (
    <>
      <BackBtn />
      <Wrapper>
        <h1>Cyborg Social Club</h1>
        <LinkBar>
          <a
            target="blank"
            href="https://github.com/rileymcmaster/cyborg-social-club"
          >
            <h3>GitHub</h3>
          </a>
        </LinkBar>
        <IntroSection>
          <div>
            <Section className="intro">
              <p>
                In an Agile team environment, we were tasked to build a
                storefront for a given API of wearable technologies. We made the
                most of our four day deadline with daily scrums and open
                communication. In the end, our collaboration yielded a fully
                functioning web-store.
              </p>
            </Section>
            <Section className="technologies">
              <h3>Technologies used</h3>
              <p>
                React, Redux, JavaScript, Node, Express, Mongoose, MongoDB, CSS
                & Stripe
              </p>
            </Section>
          </div>
          <img
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151131/CyborgStill1_ytbdw3.jpg"
            alt="mobile view of Cyborg Social Club"
          />
        </IntroSection>
        <img
          className="landscape"
          src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151614/CyborgStill2_xxcoye.jpg"
          alt="Desktop view of Cyborg social club"
        />
        <Section className="card standalone">
          <h3>My role</h3>
          <p>
            I was tasked with handling the type-ahead search function, building
            a reusable, hoverable dropdown menu component, responsive navbar and
            front-end pagination.
          </p>
        </Section>
        <Section className="marginT">
          <h3>Team members</h3>
          <p>
            <a target="blank" href="https://github.com/Hajarelmouddene">
              Hajar El Mouddene,{" "}
            </a>
            <a target="blank" href="https://github.com/daniel-sciortino">
              Daniel Sciortino{" "}
            </a>
            <a target="blank" href="https://github.com/sarahghossen">
              & Sarah Ghossen
            </a>
          </p>
        </Section>
        <BottomSection>
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
      </Wrapper>
    </>
  );
};

export default Cyborg;
