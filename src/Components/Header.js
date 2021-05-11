import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";
// icons
import { AiFillPhone } from "react-icons/ai";
import { FaPaintBrush, FaHammer } from "react-icons/fa";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { GiFalling } from "react-icons/gi";

const Header = ({
  TitlePageRef,
  ProjectsRef,
  AboutRef,
  ArtRef,
  ContactRef,
}) => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();
  const jumpToSection = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <>
      {mediaQuery ? (
        // MOBILE ************
        <Container className="media-query">
          <button type="button" onClick={() => jumpToSection(TitlePageRef)}>
            <GiFalling size={20} />
          </button>
          <button type="button" onClick={() => jumpToSection(AboutRef)}>
            <BsFillQuestionDiamondFill size={20} />
          </button>
          <button type="button" onClick={() => jumpToSection(ProjectsRef)}>
            <FaHammer size={18} />
          </button>
          <button type="button" onClick={() => jumpToSection(ArtRef)}>
            <FaPaintBrush size={15} />
          </button>
          <button
            className="icon"
            type="button"
            onClick={() => jumpToSection(ContactRef)}
          >
            <AiFillPhone size={20} />
          </button>
        </Container>
      ) : (
        // DESKTOP **********
        <Container>
          <button type="button" onClick={() => jumpToSection(TitlePageRef)}>
            Home
          </button>
          <button type="button" onClick={() => jumpToSection(AboutRef)}>
            About
          </button>
          <button type="button" onClick={() => jumpToSection(ProjectsRef)}>
            Projects
          </button>
          <button type="button" onClick={() => jumpToSection(ArtRef)}>
            Art
          </button>
          <button type="button" onClick={() => jumpToSection(ContactRef)}>
            Contact
          </button>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;
  align-items: baseline;

  top: 0;

  width: 100vw;
  height: 40px;
  padding-bottom: 0.5rem;

  z-index: 99999;
  overflow: hidden;

  background-color: var(--accent-bg-color);

  button {
    outline: none;
    border: none;
    padding: 10px 10px 0;
    margin: 0 10px;
    background-color: transparent;
    color: var(--primary-color);
    :hover {
      border-bottom: 2px solid var(--primary-color);
    }
    :active {
      border-color: white;
      color: white;
    }
    &.icon {
      position: relative;
      top: 1px;
    }
  }
  &.media-query {
    justify-content: space-between;
  }
  &.media-query > button {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 800;
  }
`;
export default Header;
