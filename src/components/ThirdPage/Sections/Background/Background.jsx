import styles from "./Background.module.css";

import React from "react";

const Background = () => {
  const makeLine = (num, direction) => {
    const array = Array(num).fill(0);
    if (direction === "row") {
      return array.map((line, index) => (
        <div
          key={index}
          className={index === num - 1 ? styles.lastRow : styles.row}
        ></div>
      ));
    } else {
      return array.map((line, index) => (
        <div
          key={index}
          className={index === num - 1 ? styles.lastCol : styles.col}
        ></div>
      ));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.rowBox}>{makeLine(10, "row")}</div>
      <div className={styles.colBox}>{makeLine(10, "col")}</div>
    </div>
  );
};

export default Background;
