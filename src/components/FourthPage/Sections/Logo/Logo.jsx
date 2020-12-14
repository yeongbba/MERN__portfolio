import React from "react";
import { Image } from "cloudinary-react";

function Logo({ name }) {
  return (
    <div
      style={{
        width: "5.2vw",
        height: "10.15vh",
        borderRadius: "50%",
        border: "0.235vw solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        cloudName="dpgnpcuzq"
        publicId={`portfolio/${name}`}
        crop="scale"
        style={{ width: "4.75vw", height: "9.35vh", borderRadius: "50%" }}
      ></Image>
    </div>
  );
}

export default Logo;
