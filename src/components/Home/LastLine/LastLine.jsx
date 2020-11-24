import React, { useState, useEffect } from "react";
import styles from "./LastLine.module.css";

function LastLine({ name }) {
  const [Describe, setDescribe] = useState(false);

  useEffect(() => {
    if (name === "describe") {
      setDescribe(true);
    }
  }, []);

  return (
    <div className={styles.lastLine}>
      <span className={Describe ? styles.purple : styles.orange}>&#125;</span>
      <span className={Describe ? styles.orange : styles.lightblue}>)</span>
      <span className={styles.lightblue}>;</span>
    </div>
  );
}

export default LastLine;
