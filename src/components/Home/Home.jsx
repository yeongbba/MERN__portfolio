import React from "react";
import styles from "./Home.module.css";
import FirstLine from "./FirstLine/FirstLine";
import LastLine from "./LastLine/LastLine";
import CommonLine from "./CommonLine/CommonLine";
import { firstData, secondData, thirdData } from "./data/data";

const Home = () => {
  const renderCommonLine = (commonLineData) =>
    commonLineData.map((data, key) => <CommonLine {...data} key={key} />);

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.describe}>
          <FirstLine
            functionName={"describe"}
            title={"Yeong Mo LEE, DEVELOPER UNIT TEST"}
          />
        </div>
        <div className={styles.it}>
          <FirstLine functionName={"it"} title={"Frontend to Backend"} />
        </div>
        <div className={styles.expect}>{renderCommonLine(firstData)}</div>
        <div className={styles.it}>
          <LastLine name={"it"} />
        </div>

        <div className={styles.it}>
          <FirstLine
            functionName={"it"}
            title={"Role in the two group projects"}
          />
        </div>
        <div className={styles.expect}>{renderCommonLine(secondData)}</div>
        <div className={styles.it}>
          <LastLine name={"it"} />
        </div>

        <div className={styles.it}>
          <FirstLine functionName={"it"} title={"Behavior & Ability"} />
        </div>
        <div className={styles.expect}>{renderCommonLine(thirdData)}</div>
        <div className={styles.it}>
          <LastLine name={"it"} />
        </div>
        <div className={styles.describe}>
          <LastLine name={"describe"} />
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.message}>Click Button or Press Enter</div>
        <div className={styles.message}>to see Yeong Mo's Portfolio</div>
        <div className={styles.button}>YARN TEST</div>
      </div>
    </div>
  );
};

export default Home;
