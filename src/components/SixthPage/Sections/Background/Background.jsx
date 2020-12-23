import React from "react";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upBox}></div>
      <div className={styles.downBox}></div>
    </div>
  );
};

export default Background;
