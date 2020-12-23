import React from "react";
import styles from "./TextBox.module.css";

function TextBox({ title1, title2, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <span className={styles.title1}>{title1}</span>
        <span className={styles.title2}>{title2}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default TextBox;
