import React from "react";
import TestCode from "./Sections/TestCode/TestCode";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./SecondPage.module.css";

const SecondPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__test}>
          <TestCode />
        </div>
      </div>
      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default SecondPage;
