import React from "react";
import { Image } from "cloudinary-react";

function Logo({ name }) {
  return (
    <div>
      <Image
        cloudName="dpgnpcuzq"
        publicId={`portfolio/${name}`}
        width="50"
        heigth="50"
        crop="scale"
        style={{ borderRadius: "50%", border: "2px solid black" }}
      ></Image>
    </div>
  );
}

export default Logo;
