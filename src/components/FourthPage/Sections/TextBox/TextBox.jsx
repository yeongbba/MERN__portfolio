import React from "react";
import styles from "./TextBox.module.css";

function TextBox({ title1, title2, text1, text2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <span className={styles.title1}>{title1}</span>
        <span className={styles.title2}>{title2}</span>
      </div>
      <div className={styles.textBox}>
        <div className={styles.text1}>{text1}</div>
        <span className={styles.text2}>{text2}</span>
      </div>
    </div>
  );
}

export default TextBox;
