import React from "react";
import { Image } from "cloudinary-react";

function Logo({ name }) {
  return (
    <div>
      <Image
        cloudName="dpgnpcuzq"
        publicId={`portfolio/${name}`}
        width="70"
        heigth="70"
        crop="scale"
        style={{ borderRadius: "50%", border: "2px solid black" }}
      ></Image>
    </div>
  );
}

export default Logo;
