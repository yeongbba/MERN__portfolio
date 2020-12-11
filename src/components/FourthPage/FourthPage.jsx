import React from "react";
import { datas } from "./datas";
import styles from "./FourthPage.module.css";

import TextBox from "./Sections/TextBox/TextBox";
import Logo from "./Sections/Logo/Logo";

import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";

const FourthPage = () => {
  const renderTextBox = () => {
    return datas.map((data) => (
      <div className={styles[data.id]} key={data.id}>
        <TextBox {...data} />
      </div>
    ));
  };

  const renderLogo = () => {
    return datas.map((data) => (
      <div className={styles[data.image]} key={data.id}>
        <Logo name={data.image} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <TopMenu />

      <div className={styles.d}>D</div>
      <div className={styles.title}>DEPTH</div>
      <div className={styles.sub}>개발을 깊이 있게</div>
      {renderTextBox()}
      {renderLogo()}

      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default FourthPage;
