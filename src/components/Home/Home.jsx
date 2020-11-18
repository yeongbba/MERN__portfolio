import React from "react";
import styles from "./Home.module.css";

const Home = () => (
  <React.Fragment>
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.line1}>
          <span className={styles.purple}>function</span>
          <span className={styles.blue}> yeongMo</span>
          <span className={styles.orange}> (</span>
          <span className={styles.white}>responsibility, communication</span>
          <span className={styles.orange}>)</span>
          <span className={styles.purple}> &#123;</span>
        </div>

        <div className={styles.line2}>
          <span className={styles.blue}>WorkedAsMarketer</span>
          <span className={styles.lightblue}> (</span>
          <span className={styles.white}>responsibility, communication</span>
          <span className={styles.lightblue}>)</span>
          <span className={styles.white}>;</span>
        </div>

        <div className={styles.line3}>
          <span className={styles.blue}>GroupProjects</span>
          <span className={styles.lightblue}> (</span>
          <span className={styles.white}>responsibility, communication</span>
          <span className={styles.lightblue}>)</span>
          <span className={styles.white}>;</span>
        </div>

        <div className={styles.line4}>
          <span className={styles.blue}>SoloProjects</span>
          <span className={styles.lightblue}> (</span>
          <span className={styles.lightblue}> )</span>
          <span className={styles.white}>;</span>
        </div>

        <div className={styles.line5}>
          <span className={styles.purple}>&#125;</span>
        </div>
      </div>

      <div className={styles.button}>PORTFOLIO START</div>
    </div>
  </React.Fragment>
);

export default Home;
