import styled from "styled-components";

export const Wrapper = styled.div`
  padding: var(--page-horizontal-padding-mobile)
    var(--page-vertical-padding-mobile);
  background-color: var(--primary-color);
  background-size: contain;
  color: var(--accent-bg-color);
  * {
    max-width: 900px;
  }

  h1 {
    font-size: 5rem;
    color: var(--accent-bg-color);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  img.landscape {
    margin-top: 3rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  }
  a:hover {
    color: white;
  }
  h3 {
    font-size: 1.5rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    display: inline-block;
    padding: 1rem 1rem 1rem 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }
  p {
    font-size: 1.2rem;
  }

  @media (min-width: 800px) {
    padding: var(--page-horizontal-padding) var(--page-vertical-padding);
    padding-bottom: 5rem;
    h1 {
      padding-top: 1rem;
    }
    h3 {
      width: auto;
      padding: 1rem;
    }
  }
`;

export const LinkBar = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 330px) {
    flex-direction: column;
    a h3 {
      width: auto;
    }
  }
  @media (min-width: 500px) {
    gap: 2rem;
  }
  a h3 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    cursor: crosshair;
    color: var(--secondary-color);
    font-weight: bold;
    vertical-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    padding: 0.5rem;
    background: none;
    white-space: nowrap;
  }
  a:hover,
  a:focus {
    outline: none;
  }
  a:hover h3,
  a:focus h3 {
    color: white;
    border-color: rgba(255, 255, 255, 1);
  }
  a:active h3 {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }
`;

export const Section = styled.section`
  line-height: 1.2;

  & ~ & {
    margin: 3rem 0;
  }

  @media (min-width: 800px) {
    & ~ & {
      margin: 0;
    }
  }
  &.intro {
    background-color: var(--secondary-color);
    padding: 20px;
    color: var(--primary-color);
    line-height: 1.5;
  }
  &.technologies {
  }
  &.standalone ul {
    margin-left: 1rem;
  }
  &.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &.card {
    padding: 0;
    margin: 3rem 0;
  }
  &.card > h3 {
    background-color: transparent;
    color: var(--secondary-color);
    margin-bottom: 0;
  }
  &.card > p {
    margin-top: 0;
    padding: 20px;
    border-bottom: 2px solid var(--secondary-color);
    border-top: 2px solid var(--secondary-color);
  }
  .indent {
  }
  &.marginT {
    margin-top: 4rem;
  }
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0;
  }
  img {
    max-width: 500px;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    div {
      margin-right: 2rem;
    }
    img {
      height: 400px;
      width: auto;
    }
  }
`;

export const BottomSection = styled.div`
  max-width: 900px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 4rem;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    gap: 0;
    img {
      width: 60%;
      margin: 0 2rem 0 0;
    }
  }
`;
