import React from "react";
import TextBox from "./Sections/TextBox";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./SeventhPage.module.css";

const SeventhPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        <div className={styles.title__main}>WITH MY CO-WORKERS</div>
        <div className={styles.title__question}>
          동료들이 바라본 개발자 이영모는?
        </div>
      </div>
      <div className={styles.text}>
        <TextBox
          text={"dslkjfsdkljfdksljflskjflsk"}
          name={"이영모"}
          id={"text1"}
        />
      </div>
      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default SeventhPage;
