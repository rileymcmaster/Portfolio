import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectCardEach = ({ data }) => {
  const { title, link, imgUrl } = data;

  return (
    <StyledLink tabIndex="0" to={link}>
      <img className="" src={imgUrl} alt="" />
      <TextCard className="">
        <h3>{title}</h3>
      </TextCard>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  flex: 1 1 300px;
  text-decoration: none;
  display: inline-block;
  width: 80vw;
  max-width: 300px;

  color: white;

  border-radius: 5px;
  background-color: var(--third-color);
  color: var(--primary-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;

  margin: 2rem auto 8rem;

  &:last-child {
    margin-bottom: 4rem;
  }

  @media (min-width: 768px) {
    width: 300px;
    margin: 2rem 0 6rem;
  }

  img {
    display: block;
    margin: -5rem auto 0;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    height: 100%;
    max-height: 400px;
    transition: all 0.2s ease-out;
  }

  &:hover:not(:active),
  &:focus {
    outline: none;
    border: none;
    cursor: crosshair;
    background-color: rgba(255, 255, 255, 1);
    text-shadow: none;
    img {
      transform: scale(1.02);
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5),
        -10px 10px 15px rgba(0, 0, 0, 0.2);
    }
  }
  &:active {
    background-color: var(--third-color);
    transform: scale(0.98);
  }
`;

const TextCard = styled.div`
  margin: 2rem 0;
  text-align: center;

  h3 {
    font-size: 1.5rem;
  }
`;
export default ProjectCardEach;
