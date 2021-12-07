import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { BsArrowLeftShort } from "react-icons/bs";

const BackBtn = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <BackIcon onClick={handleClick}>
      <BsArrowLeftShort size={50} />
    </BackIcon>
  );
};

const BackIcon = styled.div`
  margin: 10px;
  position: fixed;
  color: var(--third-color);
  :hover {
    color: white;
  }
`;

export default BackBtn;
