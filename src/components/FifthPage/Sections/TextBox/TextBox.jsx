import React from "react";
import styles from "./TextBox.module.css";

const TextBox = ({ direction, text, title, id }) => {
  return (
    <div className={`${styles.containerBox} ${styles[id]}`}>
      <div className={`${styles[direction]} ${styles.arrow}`}>
        <div className={styles.content}>
          <div className={styles.content__box}>
            <pre className={styles.content__text}>{text}</pre>
            <span className={styles.content__title}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
