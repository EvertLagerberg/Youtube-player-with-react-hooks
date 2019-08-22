import React from "react";
import { htmlDecode } from "../../utils/utils";
import styles from "./ListItem.module.css";

const ListItem = ({
  data: {
    title,
    channelTitle,
    thumbnails: { default: thumbnail }
  },
  onClick
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={thumbnail.url} className={styles.thumbnail} alt="thumbnail" />
      <div className={styles.info_container}>
        <div className={styles.title}>{htmlDecode(title)}</div>
        <div className={styles.channelTitle}>{htmlDecode(channelTitle)}</div>
      </div>
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
