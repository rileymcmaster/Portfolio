import React, { useState } from "react";
import styled from "styled-components";

import primsaticBgMobile from "../../assets/prismastic-lake-mobile.jpg";
import prismaticBgImgBlur from "../../assets/prismatic-lake-blur.jpg";

const BackgroundImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Wrapper>
      <img
        src={prismaticBgImgBlur}
        className="image-thumb"
        alt="Fog rises from prismatic lake"
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={handleLoad}
        src={primsaticBgMobile}
        className="image-full"
        alt="Fog rises from prismatic lake"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
  }
  .image-thumb {
    transition: visibility 0ms ease 400ms;
    filter: blur(5px);
    transform: scale(1.01);
  }
  .image-full {
    transition: opacity 400ms ease 0ms;
  }
`;
export default BackgroundImage;
