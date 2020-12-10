import React from "react";
import styles from "./FourthPage.module.css";
import TextBox from "./Sections/TextBox/TextBox";

const FourthPage = () => {
  const datas = [
    { direction: "leftBubble", text: "good", title: "javascript", id: "js" },
    { direction: "rightBubble", text: "good", title: "javascript", id: "html" },
  ];

  const images = ["javascript"];

  const renderTextBox = () => {
    return datas.map((data) => (
      <div className={styles[data.id]} key={data.id}>
        <TextBox {...data} />
      </div>
    ));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className={styles.d}>D</div>
      <div className={styles.sub}>DEPTH / 개발을 깊이 있게</div>
      {/* {renderTextBox()} */}
    </div>
  );
};

export default FourthPage;
