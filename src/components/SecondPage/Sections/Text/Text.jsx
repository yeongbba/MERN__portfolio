import React from "react";
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>About Me</span>
      <span className={styles.line1}>
        하루 13시간, 프론트엔드(frontend)부터 백엔드(backend)까지.
      </span>
      <span className={styles.line2}>
        업무에 플러스되는 신입 개발자를 목표로 달리고 있습니다.
      </span>
      <span className={styles.line3}>
        깊게, 넓게, 그리고 함께 성장 중인 이영모의 포트폴리오, yarn test.
      </span>
    </div>
  );
};

export default Text;
