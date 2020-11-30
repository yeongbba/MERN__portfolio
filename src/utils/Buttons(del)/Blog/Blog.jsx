import React from "react";
import styles from "./Blog.module.css";
import { Image } from "cloudinary-react";

function Blog() {
  return (
    <div className={styles.blog}>
      <a href="https://blog.naver.com/samm162" target="_blank">
        <Image
          cloudName="dpgnpcuzq"
          publicId="naver1.jpg"
          width="50"
          heigth="50"
          crop="scale"
          style={{ borderRadius: "50%" }}
        ></Image>
      </a>
    </div>
  );
}

export default Blog;
