import React from "react";
import styled from "styled-components";
import InfiniteCarousel from "react-leaf-carousel";
import photoArray from "./PhotoArray";

const PhotoGallery = () => {
  const photos = photoArray.map((photo, index) => {
    return (
      <img
        className="photo1"
        key={`photo${index + 1}`}
        src={photo}
        alt={index + 1}
      />
    );
  });

  return (
    <>
      <GalleryContainer>
        <InfiniteCarousel
          swipe={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          incrementalSides={true}
          slidesSpacing={0}
          slidesToScroll={1}
          slidesToShow={1}
          scrollOnDevice={true}
        >
          {photos}
        </InfiniteCarousel>
      </GalleryContainer>
    </>
  );
};

const GalleryContainer = styled.div`
  max-width: 1000px;
  /* margin-left: 2rem; */
  img {
    display: flex;
    pointer-events: none;
    user-select: none;
    max-height: 600px;
  }
`;
export default PhotoGallery;
