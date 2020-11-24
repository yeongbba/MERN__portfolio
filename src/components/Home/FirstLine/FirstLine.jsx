import React, { useState, useEffect } from "react";
import styles from "./FirstLine.module.css";

function FirstLine({ functionName, title }) {
  const [Describe, setDescribe] = useState(false);

  useEffect(() => {
    if (functionName === "describe") {
      setDescribe(true);
    }
  }, []);

  return (
    <div className={styles.firstLine}>
      <span className={styles.blue}>{functionName}</span>
      <span className={Describe ? styles.orange : styles.lightblue}>(</span>
      <span className={styles.lightblue}>"</span>
      <span className={styles.yellow}>{title}</span>
      <span className={styles.lightblue}>"</span>
      <span className={styles.lightblue}>, </span>
      <span className={Describe ? styles.purple : styles.orange}>()</span>
      <span className={styles.lightpurple}> => </span>
      <span className={Describe ? styles.purple : styles.orange}>&#123;</span>
    </div>
  );
}

export default FirstLine;
