import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import { search } from "../../api/youtubeApi";

import styles from "./List.module.css";

const List = ({ searchQuery, setSelectedVideo }) => {
  const [videos, setVideos] = React.useState(null);

  React.useEffect(() => {
    search(searchQuery).then(result => {
      setVideos(result.items);
      setSelectedVideo(result.items[0]);
    });

    return () => setVideos(null);
  }, [searchQuery, setSelectedVideo]);

  return (
    <div className={styles.container}>
      {videos === null ? (
        <div>Loading...</div>
      ) : (
        videos.map(video => (
          <ListItem
            key={video.id.videoId}
            data={video.snippet}
            onClick={() => setSelectedVideo(video)}
          />
        ))
      )}
    </div>
  );
};

List.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSelectedVideo: PropTypes.func.isRequired
};

export default List;
