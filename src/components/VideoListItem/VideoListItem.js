import React from "react";

const VideoListItem = ({ snippet, id }) => {
  return <div>{snippet.title}</div>;
};

VideoListItem.propTypes = {};

export default VideoListItem;
