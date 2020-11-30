import React from "react";
import { Image, Transformation } from "cloudinary-react";
import styles from "./Github.module.css";

function Gitub() {
  return (
    <div className={styles.github}>
      <a href="https://github.com/yeongbba" target="_blank">
        <Image
          cloudName="dpgnpcuzq"
          publicId="GitHub-Mark_is0p5w"
          width="50"
          heigth="50"
          crop="fill"
          style={{ borderRadius: "50%" }}
        >
          <Transformation radius="max" />
        </Image>
      </a>
    </div>
  );
}

export default Gitub;
