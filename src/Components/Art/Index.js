import React from "react";
import styled from "styled-components";
import useMediaQuery from "../useMediaQuery";

import Video from "./Video";
import PhotoGallery from "./PhotoGallery";

const Art = ({ ArtRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Container className={mediaQuery && "media-query"} ref={ArtRef}>
      <h1>Art</h1>
      {/* VIDEO */}
      <section>
        <h2>motion graphics & animation</h2>
        <Video />
      </section>
      {/* PHOTOS */}
      <section>
        <h2>photography</h2>
        <PhotoGallery />
      </section>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  background-color: var(--accent-bg-color);
  color: var(--primary-color);
  overflow-x: hidden;
  padding: 40px 20px 20px 20px;

  h2 {
    display: inline-block;
    margin: 2rem 0;
    border-top: 2px solid var(--third-color);
  }
  section {
    margin-bottom: 3rem;
  }
  &.media-query {
    h1 {
      font-size: 3rem;
    }
    h2 {
      margin: 1rem 0;
      font-size: 1rem;
    }
  }
`;
export default Art;
