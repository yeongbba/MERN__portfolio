import React from "react";
import styles from "./CommonLine.module.css";

function CommonLine({ expectValue, matcher, matcherValue }) {
  return (
    <div className={styles.commonLine}>
      <span className={styles.blue}>expect</span>
      <span className={styles.purple}>(</span>
      <span className={styles.white}>{expectValue}</span>
      <span className={styles.purple}>)</span>
      <span className={styles.lightblue}>.</span>
      <span className={styles.blue}>{matcher}</span>
      <span className={styles.purple}>(</span>
      {matcher !== "toBeTruthy" && <span className={styles.lightblue}>"</span>}
      <span className={styles.yellow}>{matcherValue.slice(1, -1)}</span>
      {matcher !== "toBeTruthy" && <span className={styles.lightblue}>"</span>}
      <span className={styles.purple}>)</span>
      <span className={styles.lightblue}>;</span>
    </div>
  );
}

export default CommonLine;
