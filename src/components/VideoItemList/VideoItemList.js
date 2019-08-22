import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";
import { search } from "../../api/youtubeApi";

const VideoItemList = ({ searchQuery }) => {
  const id = "DlJy7HQMgSI";
  const [videos, setVideos] = React.useState(null);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  React.useEffect(() => {
    search(searchQuery).then(result => setVideos(result.items));

    return () => setVideos(null);
  }, [searchQuery]);

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  const loadVideo = () => {
    // the Player object is created uniquely based on the id in props
    const player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      height: "390",
      width: "640",
      events: {
        onReady: onPlayerReady
      }
    });
  };

  React.useEffect(() => {
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      loadVideo();
    }
  }, []);

  return (
    <div>
      <div>
        <div style={{ width: 640, height: 390 }} id={`youtube-player-${id}`} />
      </div>
      {selectedVideo && (
        <div>
          <h3>Currentvideo</h3>
          <div>{selectedVideo.id.videoId}</div>
        </div>
      )}

      <div>
        {videos === null ? (
          <div>Loading...</div>
        ) : (
          videos.map(video => (
            <VideoListItem
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

export default VideoItemList;
