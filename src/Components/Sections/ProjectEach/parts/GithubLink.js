import React from "react";
import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";

const GithubLink = ({ link }) => {
  return (
    <Wrapper>
      <a target="blank" href={link}>
        <AiFillGithub size={80} />
        <p>Link to repo</p>
      </a>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  a {
    color: var(--secondary-color);
    text-decoration: none;
  }
  a:hover,
  a:focus {
    outline: none;
    color: var(--third-color);
  }
  p {
    margin-left: -5px;
  }
`;

export default GithubLink;
