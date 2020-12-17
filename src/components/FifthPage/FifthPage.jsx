import React from "react";
import Background from "./Sections/Background/Background";
import Card from "./Sections/Card/Card";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./FifthPage.module.css";

const FifthPage = () => {
  const datas = [
    { image: "javascript", text: "blahblah", tag: "blahbla", link: "www." },
    { image: "javascript", text: "blahblah", tag: "blahbla", link: "www." },
    { image: "javascript", text: "blahblah", tag: "blahbla", link: "www." },
    { image: "javascript", text: "blahblah", tag: "blahbla", link: "www." },
  ];

  const renderCards = () => {
    return datas.map((data, index) => <Card {...data} key={index} />);
  };

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.banner}>WIDTH + DEPTH</div>
      <div className={styles.title}>
        <span>온전히 내 것으로</span>
        <span>#SOLO PROJECTS</span>
      </div>
      <div className={styles.notice}>
        <span>서비스를 경험하시려면, 그림을 클릭해주세요.</span>
        <span>삼각형</span>
      </div>
      <div className={styles.card}>{renderCards()}</div>
      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default FifthPage;
