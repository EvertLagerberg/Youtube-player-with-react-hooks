import React from "react";
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
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <div>
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
    </div>
  );
};

export default List;
