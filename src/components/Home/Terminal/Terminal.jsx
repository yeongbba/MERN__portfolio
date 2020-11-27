import React from "react";
import { Image } from "cloudinary-react";

function Terminal() {
  return (
    <div>
      <Image
        cloudName="dpgnpcuzq"
        publicId="yarn_test.png"
        width="auto"
        heigth="auto"
        crop="fill"
      ></Image>
    </div>
  );
}

export default Terminal;
