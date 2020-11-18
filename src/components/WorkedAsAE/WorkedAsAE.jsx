import React from "react";
import styles from "./WorkedAsAE.module.css";

function WorkedAsAE() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Worked As AE</h1>
      <div className={styles.content1}>
        <img
          src={"./wes-hicks-4-EeTnaC1S4-unsplash.jpg"}
          style={{ width: "300px", height: "200px" }}
        />
        <div className={styles.content1__text}>
          <h3>함께 일하고 싶은 사람</h3>
          <p>
            JAJU, NAVER, ADIDAS, 10X10 등 브랜드들의 캠페인을 기획하고, 운영하는
            업무를 수행하였습니다. 프로젝트를 진행할 때마다, 팀원들의 머릿속에
            계속 함께 일하고 싶은 사람으로 남고 싶었습니다. 이를 위해서, 제가
            가장 중점적으로 신경썼던 것은 책임감입니다.
          </p>
        </div>
      </div>
      <div className={styles.content2}>
        <img
          src={"./wes-hicks-4-EeTnaC1S4-unsplash.jpg"}
          style={{ width: "300px", height: "200px" }}
        />
        <div className={styles.content2__text}>
          <h3>어떻게든 해보겠습니다.</h3>
          <p>
            큰 업무가 주어져도 해낼 수 있다는 것을 보여주고 싶었습니다. 그
            때마다, 저녁과 주말을 투자해서라도 최대한 고민이 묻어있는 결과물을
            만들었습니다. 이러한 태도가 만든 "맡기면 어떻게든 해오는 팀원",
            "계속 성장할 팀원"이라는 믿음. 개발자 이영모도 책임감으로 믿음을
            드리고, 같이 일하고 싶은 팀원이 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkedAsAE;
