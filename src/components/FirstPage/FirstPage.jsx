import React, { useState } from "react";
import { Image } from "cloudinary-react";

import Title from "./Sections/Title/Title";
import Button from "./Sections/Button/Button";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  const [Background, setBackground] = useState(false);

  const changeBlackBG = () => {
    setBackground(true);
  };

  const changeTransparentBG = () => {
    setBackground(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <Image
          cloudName="dpgnpcuzq"
          publicId="portfolio/firstpage_bg"
          width="auto"
          crop="scale"
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <Title />
        </div>
        <div
          className={styles.btn}
          onMouseEnter={changeBlackBG}
          onMouseLeave={changeTransparentBG}
        >
          <Button />
        </div>
        <div
          className={Background ? styles.blackBG : styles.transparentBG}
        ></div>
      </div>
    </div>
  );
};

export default FirstPage;
