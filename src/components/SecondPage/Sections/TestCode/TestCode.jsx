import React from "react";
import styles from "./TestCode.module.css";

const TestCode = () => {
  return (
    <div className={styles.container}>
      <span className={styles.start}>
        describe&#40;"LEE YEONG MO, web developer unit test", &#40;&#41; =>
        &#123;
      </span>
      <span className={styles.middle}>
        it&#40;"Frontend to Backend", &#40;&#41; => &#123;
      </span>
      <span className={styles.end}>
        expect&#40;langauge&#41;.toBe&#40;"Typescript"&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;frontend&#41;.toBe&#40;"React"&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;Backend&#41;.toEqual&#40;&#91;"Express", "AWS",
        "Docker"&#93;&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;Database&#41;.toEqual&#40;&#91;"Mysql", "MongoDB"&#93;&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;StateManagement&#41;.toEqual&#40;&#91;"Redux",
        "Graphql"&#93;&#41;;
      </span>
      <span className={styles.middle}>&#125;&#41;;</span>

      <span className={styles.middle}>
        it&#40;"Role in the two group projects", &#40;&#41; => &#123;
      </span>
      <span className={styles.end}>
        expect&#40;Scraper.role&#41;.toBe&#40;"Frontend"&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;projectName.role&#41;.toBe&#40;"Backend"&#41;;
      </span>
      <span className={styles.middle}>&#125;&#41;;</span>

      <span className={styles.middle}>
        it&#40;"Behabior & Ability", &#40;&#41; => &#123;
      </span>
      <span className={styles.end}>
        expect&#40;responsibility&#41;.toBeTruthy&#40;&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;communication&#41;.toBeTruthy&#40;&#41;;
      </span>
      <span className={styles.end}>
        expect&#40;fastLearning&#41;.toBeTruthy&#40;&#41;;
      </span>
      <span className={styles.middle}>&#125;&#41;;</span>
      <span className={styles.start}>&#125;&#41;;</span>
    </div>
  );
};

export default TestCode;
