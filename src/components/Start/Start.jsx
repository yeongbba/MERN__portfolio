import React from "react";
import styles from "./Start.module.css";

function Start() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>

      <div className={styles.main__name}>LEE YEONG MO</div>
      <div className={styles.main__title}>PORTFOLIO</div>

      <div className={styles.btn}>
        <h1>START</h1>
      </div>
    </div>
  );
}

export default Start;
