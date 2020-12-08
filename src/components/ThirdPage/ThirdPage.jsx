import React from "react";
import Background from "./Sections/Background/Background";
import TextBox from "./Sections/TextBox/TextBox";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  const cards = [
    {
      id: "typescript",
      title1: "TYPE",
      title2: "SCRIPT",
      text: "타입 지정으로 가독성은 업, 에러 확률은 다운!",
    },
    {
      id: "git",
      title1: "GIT ",
      title2: "FLOW",
      text: "같이 일해도 문제없이, 협업 준비 끝!",
    },
    {
      id: "graphql",
      title1: "GRAPH",
      title2: "QL",
      text: "원하는 데이터만 쏙쏙 골라 최소한의 요청으로 끝!",
    },
    {
      id: "jest",
      title1: "JEST/",
      title2: "ENZYME",
      text: "유닛 테스트와 E2E 테스트로 문제없이 안전하게!",
    },
  ];

  const renderCard = () =>
    cards.map((card, index) => (
      <div key={index} className={styles[card.id]}>
        <TextBox {...card} />
      </div>
    ));

  return (
    <div className={styles.container}>
      <Background />
      <TopMenu />
      <div className={styles.w}>W</div>
      <div className={styles.sub}>WIDTH / 개발을 폭넓게</div>
      <div>{renderCard()}</div>
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default ThirdPage;
