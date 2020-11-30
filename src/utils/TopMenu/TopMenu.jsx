import React from "react";
import Email from "./Sections/Email/Email";
import Blog from "./Sections/Blog/Blog";
import Github from "./Sections/Github/Github";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./TopMenu.module.css";

const TopMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        <MenuOutlined />
      </div>
      <div className={styles.rightMenu}>
        <Blog />
        <Github />
        <Email />
      </div>
    </div>
  );
};

export default TopMenu;
