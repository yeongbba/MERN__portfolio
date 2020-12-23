import React from "react";
import Text from "../ThirdPage/Sections/Text/Text";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.name}>LYM</div>
        <div className={styles.content__text}>
          <Text />
        </div>
      </div>
      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default ThirdPage;
