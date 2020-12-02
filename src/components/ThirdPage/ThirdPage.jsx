import React from "react";
import Background from "./Sections/Background/Background";
import TextBox from "./Sections/TextBox/TextBox";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  const cards = [
    { id: 1, title: "TYPESCRIPT", text: "ddd" },
    { id: 2, title: "TYPESCRIP", text: "ddd" },
    { id: 3, title: "TYPESCRI", text: "ddd" },
    { id: 4, title: "TYPESCR", text: "ddd" },
  ];

  const renderCard = () =>
    cards.map((card, index) => (
      <div key={index} className={styles[card.title]}>
        <TextBox {...card} />
      </div>
    ));

  return (
    <div className={styles.container}>
      <Background />
      <TopMenu />
      <div>{renderCard()}</div>
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default ThirdPage;
