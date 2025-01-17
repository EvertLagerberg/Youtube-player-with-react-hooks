import React from "react";
import PropTypes from "prop-types";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import styles from "./ControlPanel.module.css";

const ControlPanel = ({
  state,
  play,
  pause,
  isMuted,
  mute,
  unMute,
  children
}) => {
  const [sound, setSound] = React.useState(true);
  const tooglePlayback = () => {
    // -1 – unstarted
    // 0 – ended
    // 1 – playing
    // 2 – paused
    // 3 – buffering
    // 5 – video cued
    if (state === 1) {
      pause();
    } else if (state === 2 || state === 5) {
      play();
    } else {
      // do nothing
    }
  };

  const toggleMute = () => {
    if (isMuted()) {
      unMute();
      setSound(true);
    } else {
      mute();
      setSound(false);
    }
  };
  const isDisabled = state !== 1 && state !== 2 && state !== 5;
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <button
        disabled={isDisabled}
        className={styles.playButton}
        onClick={() => tooglePlayback()}
      >
        {state === 1 ? <FaPause size="20px" /> : <FaPlay size="20px" />}
      </button>
      <button
        disabled={isDisabled}
        className={styles.muteButton}
        onClick={() => toggleMute()}
      >
        {sound ? (
          <FaVolumeUp size="20px" />
        ) : (
          <FaVolumeMute color="red" size="20px" />
        )}
      </button>
    </div>
  );
};

ControlPanel.propTypes = {
  state: PropTypes.number.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  mute: PropTypes.func.isRequired,
  unMute: PropTypes.func.isRequired,
  isMuted: PropTypes.func.isRequired
};

export default ControlPanel;
