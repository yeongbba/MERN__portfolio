import React from "react";
import styles from "./Buttons.module.css";
import Email from "./Email/Email";
import Blog from "./Blog/Blog";
import Github from "./Github/Github";

function Buttons() {
  return (
    <div className={styles.buttons}>
      <Email />
      <Blog />
      <Github />
    </div>
  );
}

export default Buttons;
