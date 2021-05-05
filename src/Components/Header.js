import React from "react";
import styled from "styled-components";
import useMediaQuery from "./useMediaQuery";
// icons
import { AiFillPhone } from "react-icons/ai";

const Header = ({
  TitlePageRef,
  ProjectsRef,
  AboutRef,
  ArtRef,
  ContactRef,
}) => {
  // breakpoint is 850px
  let mediaQuery = useMediaQuery();
  const jumpToSection = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <Container className={mediaQuery && "media-query"}>
      <button type="button" onClick={() => jumpToSection(TitlePageRef)}>
        {mediaQuery ? "RM" : "Home"}
      </button>
      <button type="button" onClick={() => jumpToSection(AboutRef)}>
        {mediaQuery ? "?" : "About"}
      </button>
      <button type="button" onClick={() => jumpToSection(ProjectsRef)}>
        {mediaQuery ? "P" : "Projects"}
      </button>
      {/* <button type="button" onClick={() => jumpToSection(ArtRef)}>
        Art
      </button> */}
      <button
        className={mediaQuery && "icon"}
        type="button"
        onClick={() => jumpToSection(ContactRef)}
      >
        {mediaQuery ? <AiFillPhone size={20} /> : "Contact"}
      </button>
    </Container>
  );
};
const Container = styled.div`
  float: right;
  background-color: var(--accent-bg-color);
  width: 100vw;
  height: 40px;
  position: fixed;
  z-index: 99999;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
  &.media-query > button {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 800;
  }
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
      padding: 0 0 2px;
      vertical-align: bottom;
      margin-top: 0.8rem;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default Header;
