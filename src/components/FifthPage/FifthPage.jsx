import React from "react";
import Background from "./Sections/Background/Background";
import Card from "./Sections/Card/Card";
import TopMenu from "../../utils/TopMenu/TopMenu";
import Scroll from "../../utils/Scroll/Scroll";
import BottomMenu from "../../utils/BottomMenu/BottomMenu";
import newTweet from "../../images/nweet.png";
import styles from "./FifthPage.module.css";

const FifthPage = () => {
  const datas = [
    {
      image: newTweet,
      title: `실시간 채팅 앱 New Tweet`,
      text: `전체적인 컴포넌트의 구조를 잡고 Hooks로
state 관리하는 법을 익힌 프로젝트입니다.
또한, FireBase를 사용하면서 Oauth,
DB, Storage에 대한 개념을 다졌습니다.
`,
      tag: `React | Javascript | Firebase`,
      link: "https://yeongbba.github.io/ReactJS__new-tweet/",
    },
    {
      image: newTweet,
      text: "blahblah",
      tag: `React | Redux | Javascript | Nodejs | express | MongoDB`,
      link: "https://yeongbba.github.io/ReactJS__new-tweet/#/",
    },
    {
      image: newTweet,
      text: `React와 FireBase로 만든 실시간 채팅 어플리케이션 New Tweet입니다.
이 프로젝트로 전체적인 컴포넌트의 구조를 잡고 Hooks로 state 관리하는 법을 익혔습니다.
또한, FireBase를 사용하면서 Oauth, 데이터 베이스, Storage에 대한 개념을 잡았습니다.
`,
      tag: `React | Javascript | Firebase`,
      link: "https://yeongbba.github.io/ReactJS__new-tweet/#/",
    },
    {
      image: newTweet,
      text: `React와 FireBase로 만든 실시간 채팅 어플리케이션 New Tweet입니다.
이 프로젝트로 전체적인 컴포넌트의 구조를 잡고 Hooks로 state 관리하는 법을 익혔습니다.
또한, FireBase를 사용하면서 Oauth, 데이터 베이스, Storage에 대한 개념을 잡았습니다.
`,
      tag: `React | Javascript | Firebase`,
      link: "https://yeongbba.github.io/ReactJS__new-tweet/#/",
    },
  ];

  const renderCards = () => {
    return datas.map((data, index) => <Card {...data} key={index} />);
  };

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.banner}>WIDTH + DEPTH</div>
      <div className={styles.title}>
        <span>온전히 내 것으로</span>
        <span>#SOLO PROJECTS</span>
      </div>
      <div className={styles.notice}>
        <span>서비스를 경험하시려면, 그림을 클릭해주세요.</span>
        <span>삼각형</span>
      </div>
      <div className={styles.card}>{renderCards()}</div>
      <TopMenu />
      <Scroll />
      <BottomMenu />
    </div>
  );
};

export default FifthPage;
