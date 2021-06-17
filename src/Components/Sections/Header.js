import React from "react";
import styled from "styled-components";
import useMediaQuery from "../Utils/useMediaQuery";
import ReactTooltip from "react-tooltip";
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

  const iconSize = (x) => {
    let result;
    if (mediaQuery) {
      result = x * 10;
    }
    if (!mediaQuery) {
      result = x * 15;
    }
    return result;
  };

  return (
    <>
      <Container className={mediaQuery && "media-query"}>
        <button
          data-tip="Landing page"
          type="button"
          onClick={() => jumpToSection(TitlePageRef)}
        >
          <GiFalling size={iconSize(2)} />
        </button>
        <ReactTooltip effect="solid" className="icon-tooltip" />
        <button
          data-tip="About me"
          type="button"
          onClick={() => jumpToSection(AboutRef)}
        >
          <BsFillQuestionDiamondFill size={iconSize(2)} />
        </button>
        <ReactTooltip effect="solid" className="icon-tooltip" />
        <button
          data-tip="Web projects"
          type="button"
          onClick={() => jumpToSection(ProjectsRef)}
        >
          <FaHammer size={iconSize(1.8)} />
        </button>
        <ReactTooltip effect="solid" className="icon-tooltip" />
        <button
          data-tip="Art projects"
          type="button"
          onClick={() => jumpToSection(ArtRef)}
        >
          <FaPaintBrush size={iconSize(1.6)} />
        </button>
        <ReactTooltip effect="solid" className="icon-tooltip" />
        <button
          className="icon"
          type="button"
          data-tip="Contact"
          onClick={() => jumpToSection(ContactRef)}
        >
          <AiFillPhone size={iconSize(2)} />
        </button>
        <ReactTooltip effect="solid" className="icon-tooltip" />
      </Container>
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
  height: 3.2rem;
  padding-bottom: 0.5rem;
  padding-left: var(--page-vertical-padding);
  gap: 1.5rem;

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
    padding-left: 0;
    height: 2.5rem;
    gap: 0;
  }
  &.media-query > button {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 800;
  }
  .icon-tooltip {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-size: 14px;
    /* font-weight: 500; */
    box-shadow: 2px 2px 5px var(--third-color);
  }
`;
export default Header;
