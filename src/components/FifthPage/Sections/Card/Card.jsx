import React from "react";
import styles from "./Card.module.css";
import { Image } from "cloudinary-react";
import { useState } from "react";

const Card = ({ image, text, tag, hover, link }) => {
  const [Hover, setHover] = useState(false);

  const onMouseOverHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <Image
          cloudName="dpgnpcuzq"
          publicId={`portfolio/${image}`}
          crop="scale"
          style={{ width: "3.833rem", height: "3.810rem" }}
        ></Image>
        {Hover && (
          <div className={styles.cover}>
            <a href={link} target="_blank">
              <div className={styles.cover__btn}>CLICK TO WATCH</div>
            </a>
            <div className={styles.cover__tag}>{tag}</div>
          </div>
        )}
      </div>
      <div className={styles.text}>{text}</div>
      <div className={`${styles.tag} ${Hover && styles.opacity}`}>{tag}</div>
    </div>
  );
};

export default Card;
