import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import useMediaQuery from "../../Utils/useMediaQuery";

const Projects = ({ ProjectsRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <Container
      className={mediaQuery ? "media-query" : undefined}
      ref={ProjectsRef}
    >
      <h1>PROJECTS</h1>
      <ProjectCard />
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--accent-bg-color);
  overflow-x: hidden;
  padding: var(--page-horizontal-padding) var(--page-vertical-padding);
  min-height: 100vh;
  h1 {
    color: var(--third-color);
    margin-top: 1rem;
    margin-bottom: 5rem;
    font-size: clamp(3.5em, calc(12 / 80 * 100vw), 10em);
  }
  &.media-query {
    padding: var(--page-horizontal-padding-mobile)
      var(--page-vertical-padding-mobile);
    h1 {
      margin-bottom: 1rem;
    }
  }
`;

export default Projects;
