import React from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import styles from "./ControlPanel.module.css";

const ControlPanel = ({ state, play, pause, isMuted, mute, unMute }) => {
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
    } else if (state === 2) {
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

  if (state !== 1 && state !== 2) {
    return <div disabled={true}>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <button className={styles.playButton} onClick={() => tooglePlayback()}>
        {state === 1 ? <FaPause size="20px" /> : <FaPlay size="20px" />}
      </button>
      <button className={styles.muteButton} onClick={() => toggleMute()}>
        {sound ? (
          <FaVolumeUp size="20px" />
        ) : (
          <FaVolumeMute color="red" size="20px" />
        )}
      </button>
    </div>
  );
};

export default ControlPanel;
