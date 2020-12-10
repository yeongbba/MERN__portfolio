import React from "react";
import styles from "./TextBox.module.css";

const TextBox = ({ direction, text, title }) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <div className={`${styles.rightBubble} ${styles.arrow}`}>
      <div className={styles.content}>
        <div className={styles.content__box}>
          <span className={styles.content__text}>
            HI, I'm fine thank you blah blah
          </span>
          <span className={styles.content__title}>
            Heloooooooooooooooooooooooo
          </span>
        </div>
      </div>
    </div>
    {/* <div
      className={`${styles.bubble} ${styles.medium} ${styles.arrow} ${styles.br}`}
    >
      <div className={styles.content}>
        Hi. I'm an expandeable cartoon speech bubble with box shadow. How are
        you? I can have an arrow on the bottom right.
      </div>
    </div>
    <div
      className={`${styles.bubble} ${styles.medium} ${styles.arrow} ${styles.tl}`}
    >
      <div className={styles.content}>
        Hi. I'm an expandeable cartoon speech bubble with box shadow. How are
        you? I expand horizontally and vertically, as you can see here. And my
        Arrow is on the top left.
      </div>
    </div>
    <div
      className={`${styles.bubble} ${styles.large} ${styles.arrow} ${styles.tr}`}
    >
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
    <div className={`${styles.bubble} ${styles.small} ${styles.black}`}>
      <div className={styles.content}>Look Ma, no arrow!</div>
    </div> */}
  </div>
);

export default TextBox;
