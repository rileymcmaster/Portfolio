import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import useMediaQuery from "../useMediaQuery";

const Projects = ({ ProjectsRef }) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();

  return (
    <>
      <Container className={mediaQuery && "media-query"} ref={ProjectsRef}>
        <h1>PROJECTS</h1>
        <ProjectCard />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--accent-bg-color);
  overflow-x: hidden;
  padding: 40px 20px 20px 20px;
  min-height: 100vh;
  h1 {
    color: var(--third-color);
    margin-bottom: 5rem;
    font-size: 8rem;
  }
  &.media-query {
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Projects;
