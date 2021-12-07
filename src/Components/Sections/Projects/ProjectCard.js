import React from "react";
import styled from "styled-components";
import ProjectCardEach from "./ProjectCardEach";
import projectDetails from "./projectDetails";

const ProjectCard = () => {
  return (
    <Container>
      {projectDetails.map((project) => {
        return <ProjectCardEach key={Math.random() * 10000} data={project} />;
      })}
    </Container>
  );
};
const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
  }
`;
export default ProjectCard;
