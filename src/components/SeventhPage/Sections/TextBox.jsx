import React from "react";
import styles from "./TextBox.module.css";

const TextBox = ({ text, name, id }) => {
  return (
    <div className={`${styles.container} ${styles.id}`}>
      <div className={styles.quotes}>"</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default TextBox;
