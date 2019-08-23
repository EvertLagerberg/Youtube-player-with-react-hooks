import React from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter.js";
import ControlPanel from "../ControlPanel/ControlPanel";

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
    const createVideoPlayer = () => {
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

    const addYoutubeScript = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      window.onYouTubeIframeAPIReady = createVideoPlayer;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    if (ready && videoId) {
      playerRef.current.cueVideoById(videoId);
    } else if (!window.YT) {
      addYoutubeScript();
    } else {
      // If script is already there, create the videoPlayer
      createVideoPlayer();
    }
  }, [videoId, ready]);

  return (
    <>
      <div className="player" id={"player"} />
      {ready && playerState && (
        <>
          <ControlPanel
            state={playerState}
            isMuted={() => playerRef.current.isMuted()}
            play={() => playerRef.current.playVideo()}
            pause={() => playerRef.current.pauseVideo()}
            mute={() => playerRef.current.mute()}
            unMute={() => playerRef.current.unMute()}
          >
            <Counter playerObject={playerRef.current} />
          </ControlPanel>
        </>
      )}
    </>
  );
};

Player.propTypes = {
  videoId: PropTypes.string.isRequired
};

export default Player;
