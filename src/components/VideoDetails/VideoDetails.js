import React from "react";
import PropTypes from "prop-types";
import { htmlDecode } from "../../utils/utils";

import styles from "../VideoDetails/VideoDetail.module.css";

const VideoDetails = ({ title, channelTitle, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{htmlDecode(title)}</div>
      <div className={styles.description}>{htmlDecode(description)}</div>
      <div className={styles.channelTitle}>{htmlDecode(channelTitle)}</div>
    </div>
  );
};

VideoDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired
};

export default VideoDetails;
