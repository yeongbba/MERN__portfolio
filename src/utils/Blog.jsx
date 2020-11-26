import React from "react";
import { Image, Transformation } from "cloudinary-react";

function Blog() {
  return (
    <div>
      <a href="https://blog.naver.com/samm162" target="_blank">
        <Image
          cloudName="dpgnpcuzq"
          publicId="naver1.jpg"
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

export default Blog;
