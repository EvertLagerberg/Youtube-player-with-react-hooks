import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";
import { search } from "../../api/youtubeApi";

const VideoItemList = ({ searchQuery }) => {
  const [videos, setVideos] = React.useState(null);

  React.useEffect(() => {
    search(searchQuery).then(result => setVideos(result.items));

    return () => setVideos(null);
  }, [searchQuery]);

  if (videos === null) {
    console.log("loading");
    return <div>Loading...</div>;
  }

  console.log(videos);
  return (
    <div>
      HEJ
      {videos.map(video => (
        <VideoListItem snippet={video.snippet} id={video.id} />
      ))}
    </div>
  );
};

export default VideoItemList;
