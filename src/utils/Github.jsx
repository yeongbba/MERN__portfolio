import React from "react";
import { Image, Transformation } from "cloudinary-react";

function Gitub() {
  return (
    <div>
      <a href="https://github.com/yeongbba" target="_blank">
        <Image
          cloudName="dpgnpcuzq"
          publicId="git.png"
          width="55"
          heigth="55"
          crop="scale"
        >
          <Transformation radius="max" />
        </Image>
      </a>
    </div>
  );
}

export default Gitub;
