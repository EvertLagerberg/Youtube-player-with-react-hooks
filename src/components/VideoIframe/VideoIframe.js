import React from "react";

const VideoIframe = props => {
  return (
    <>
      <iframe
        title="youtube-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cmp9_bwNQPg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </>
  );
};

VideoIframe.propTypes = {};

export default VideoIframe;
