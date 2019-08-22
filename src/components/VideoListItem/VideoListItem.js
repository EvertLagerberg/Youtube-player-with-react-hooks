import React from "react";

const VideoListItem = ({
  data: {
    title,
    thumbnails: { default: thumbnail }
  },
  onClick
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={thumbnail.url} height={90} width={120} />
      <button onClick={onClick}>select</button>
    </div>
  );
};

VideoListItem.propTypes = {};

export default VideoListItem;
