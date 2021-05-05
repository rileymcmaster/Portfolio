import React from "react";
import styled from "styled-components";

const Art = ({ ArtRef }) => {
  return (
    <Container ref={ArtRef}>
      <h1>Art</h1>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  background-color: var(--accent-bg-color);
  color: var(--primary-color);
  overflow-x: hidden;
  padding: 40px 20px 20px 20px;
`;
export default Art;
