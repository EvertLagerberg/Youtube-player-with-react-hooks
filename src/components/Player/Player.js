import React from "react";

const Player = () => {
  const id = "DlJy7HQMgSI";

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  React.useEffect(() => {
    const loadVideo = () => {
      // the Player object is created uniquely based on the id in props
      new window.YT.Player(`player-${id}`, {
        videoId: id,
        height: "100%",
        width: "100%",
        events: {
          onReady: onPlayerReady
        }
      });
    };

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
  }, [id]);

  return <div className="player" id={`player-${id}`} />;
};

export default Player;
