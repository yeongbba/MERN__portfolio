import React from "react";
import Title from "./Title/Title";
import Button from "./Button/Button";
import styles from "./FirstPage.module.css";
import { Image, Transformation } from "cloudinary-react";

function FirstPage() {
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
      <div className={styles.title}>
        <Title />
        <Button />
      </div>
    </div>
  );
}

export default FirstPage;
