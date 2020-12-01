import React from "react";
import styles from "./Scroll.module.css";
import { DownOutlined } from "@ant-design/icons";

const Scroll = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll__text}>scroll</div>
      <div className={styles.scroll__icon}>
        <DownOutlined />
      </div>
    </div>
  );
};

export default Scroll;
