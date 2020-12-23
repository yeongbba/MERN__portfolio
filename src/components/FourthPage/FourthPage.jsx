import React from "react";
import Background from "./Sections/Background/Background";
import TextBox from "./Sections/TextBox/TextBox";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./FourthPage.module.css";
import { cards } from "./data";

const FourthPage = () => {
  const renderCard = () =>
    cards.map((card, index) => (
      <div key={index} className={styles[card.id]}>
        <TextBox {...card} />
      </div>
    ));

  return (
    <div className={styles.container}>
      <Background />

      <span className={styles.w}>w</span>
      <div className={styles.sub}>WIDTH / 개발을 폭넓게</div>
      <div>{renderCard()}</div>

      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default FourthPage;
