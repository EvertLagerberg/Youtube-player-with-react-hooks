import React from "react";
import PropTypes from "prop-types";
import ControlPanel from "../ControlPanel/ControlPanel";

import styles from "./Player.module.css";

const Player = ({ videoId }) => {
  const [ready, setReady] = React.useState(false);
  const [playerState, setPlayerState] = React.useState(false);
  const playerRef = React.useRef(null);

  const onPlayerReady = event => {
    setReady(true);
  };

  const onPlayerStateChange = event => {
    setPlayerState(event.data);
  };

  React.useEffect(() => {
    const loadVideo = () => {
      // the Player object is created uniquely based on the id in props

      playerRef.current = new window.YT.Player("player", {
        height: "100%",
        width: "100%",
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        },
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          fs: 0
        }
      });
    };

    if (ready && videoId) {
      playerRef.current.cueVideoById(videoId);
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
  }, [videoId, ready]);

  return (
    <div className={styles.container}>
      <div className="player" id={"player"} />
      {ready && playerState && (
        <ControlPanel
          state={playerState}
          isMuted={() => playerRef.current.isMuted()}
          play={() => playerRef.current.playVideo()}
          pause={() => playerRef.current.pauseVideo()}
          mute={() => playerRef.current.mute()}
          unMute={() => playerRef.current.unMute()}
        />
      )}
    </div>
  );
};

Player.propTypes = {
  videoId: PropTypes.string.isRequired
};

export default Player;
