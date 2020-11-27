import React from "react";
import styles from "./Nav.module.css";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";

function Nav() {
  return (
    <div>
      <div className={styles.up}>
        <UpCircleOutlined />
      </div>
      <div className={styles.down}>
        <DownCircleOutlined />
      </div>
    </div>
  );
}

export default Nav;
