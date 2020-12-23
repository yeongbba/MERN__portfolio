import React from "react";
import { Image } from "cloudinary-react";

function Logo({ name }) {
  return (
    <div
      style={{
        width: "4.196rem",
        height: "4.136rem",
        borderRadius: "50%",
        border: "0.19rem solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        cloudName="dpgnpcuzq"
        publicId={`portfolio/${name}`}
        crop="scale"
        style={{ width: "3.833rem", height: "3.810rem", borderRadius: "50%" }}
      ></Image>
    </div>
  );
}

export default Logo;
