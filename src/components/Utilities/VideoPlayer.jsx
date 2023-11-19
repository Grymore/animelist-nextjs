"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handlecVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const options = {
    width: "300",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-colors-primary px-3 mb-1 float-right bg-colors-secondary"
          onClick={handlecVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          opts={options}
          onError={() => {
            alert("ga bisa bos ");
          }}
        />
      </div>
    );
  };

  const ButtonOpenThriler = () => {
    return (
      <button
        onClick={handlecVideoPlayer}
        className="fixed rounded bottom-5 right-5 w-32 bg-colors-primary 
        text-colors-dark hover:text-colors-accent text-xl 
        shadow-xl transition-all"
      >
        Show
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenThriler />;
};

export default VideoPlayer;
