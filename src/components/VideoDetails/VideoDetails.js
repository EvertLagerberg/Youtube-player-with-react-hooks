import React from "react";
import { htmlDecode } from "../../utils/utils";

import styles from "../VideoDetails/VideoDetail.module.css";

const VideoDetails = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{htmlDecode(data.title)}</div>
      <div className={styles.description}>{htmlDecode(data.description)}</div>
      <div className={styles.channelTitle}>{htmlDecode(data.channelTitle)}</div>
    </div>
  );
};

export default VideoDetails;
