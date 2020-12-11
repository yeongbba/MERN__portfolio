import React from "react";
import styles from "./FourthPage.module.css";

import TextBox from "./Sections/TextBox/TextBox";
import Logo from "./Sections/Logo/Logo";

import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";

const FourthPage = () => {
  const datas = [
    {
      direction: "leftBubble",
      text: "javascript 와 typescript",
      title: "javascript",
      id: "js",
    },
    {
      direction: "rightBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "network",
      id: "html",
    },
    {
      direction: "rightBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "dom",
      id: "html",
    },
    {
      direction: "leftBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "react",
      id: "html",
    },
    {
      direction: "leftBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "security",
      id: "html",
    },
    {
      direction: "leftBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "database",
      id: "html",
    },
    {
      direction: "leftBubble",
      text: "Http와 Https 통신 방식의 차이?",
      title: "express",
      id: "html",
    },
  ];

  const images = ["javascript"];

  const renderTextBox = () => {
    return datas.map((data) => (
      <div className={styles[data.id]} key={data.id}>
        <TextBox {...data} />
      </div>
    ));
  };

  const renderLogo = () => {
    return images.map((image, index) => (
      <div className={styles[image]} key={index}>
        <Logo name={image} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <TopMenu />
      <Logo name={images} />
      <div className={styles.d}>D</div>
      <div className={styles.title}>DEPTH</div>
      <div className={styles.sub}>개발을 깊이 있게</div>
      {/* {renderTextBox()} */}
      {/* {renderLogo()} */}

      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default FourthPage;
