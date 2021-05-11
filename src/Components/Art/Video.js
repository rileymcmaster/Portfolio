import React, { useState } from "react";
import styled from "styled-components";
import useMediaQuery from "../useMediaQuery";

const Video = () => {
  // breakpoint is 700px
  let mediaQuery = useMediaQuery();
  //
  const [showHoverMessage, setShowHoverMessage] = useState(true);
  // VIDEO CONTROLS
  const playMovie = (e) => {
    e.target.play();
  };
  const pauseMovie = (e) => {
    e.target.pause();
  };
  return (
    <>
      {mediaQuery ? (
        <YoutubeVideo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4Efi7pVMowk?controls=0"
            title="Embedded youtube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </YoutubeVideo>
      ) : (
        <VideoContainer
          onMouseEnter={() => setShowHoverMessage(false)}
          onMouseLeave={() => setShowHoverMessage(true)}
        >
          <p className={!showHoverMessage && "hide-message"}>Hover to play</p>
          <video
            loop
            onMouseOver={(e) => playMovie(e)}
            onMouseLeave={(e) => pauseMovie(e)}
          >
            <source
              src="https://res.cloudinary.com/bodyofwater/video/upload/v1620753680/Portolio/Video/Assembly_2_2_Loop_x264_e4p0mn.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>
      )}
    </>
  );
};

const VideoContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 0;
  max-width: 600px;
  max-height: 450px;
  video {
    background-image: url("https://res.cloudinary.com/bodyofwater/image/upload/v1620754004/Portolio/Video/vlcsnap-2021-05-10-16h51m00s157_le9ynf.jpg");
  }
  video:hover {
    box-shadow: 0 0 30px var(--primary-color);
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color);
    color: var(--accent-bg-color);
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
    box-shadow: 5px 5px 5px var(--third-color);
    opacity: 1;
    user-select: none;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  p.hide-message {
    opacity: 0;
  }
`;

const YoutubeVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  margin-bottom: 0;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export default Video;
