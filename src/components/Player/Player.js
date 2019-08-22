import React from "react";

const Player = ({ video: { id: { videoId } = {} } = {} }) => {
  const id = "DlJy7HQMgSI";

  const [firstVideoLoaded, setFirstVideoLoaded] = React.useState(false);
  //   const [player, setPlayer] = React.useState(null);
  const playerRef = React.useRef(null);
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  React.useEffect(() => {
    const loadVideo = () => {
      // the Player object is created uniquely based on the id in props

      playerRef.current = new window.YT.Player("player", {
        videoId,
        height: "100%",
        width: "100%",
        events: {
          onReady: onPlayerReady
        }
      });

      setFirstVideoLoaded(true);
    };

    if (firstVideoLoaded) {
      playerRef.current.loadVideoById(videoId);
    } else if (!window.YT) {
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
  }, [videoId]);

  return <div className="player" id={"player"} />;
};

export default Player;
