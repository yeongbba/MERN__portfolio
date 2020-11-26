import React from "react";
import { Button, notification } from "antd";
import "antd/dist/antd.css";
import { Image, Transformation } from "cloudinary-react";

const Context = React.createContext({ name: "Default" });

const Email = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: "Contact Point",
      description: (
        <Context.Consumer>
          {({ email }) => `Hello, My email address is ${email}`}
        </Context.Consumer>
      ),
      placement,
    });
  };

  return (
    <Context.Provider value={{ email: "yeongmolee2@gmail.com" }}>
      {contextHolder}
      <Image
        cloudName="dpgnpcuzq"
        publicId="email.jpg"
        width="60"
        heigth="60"
        crop="scale"
        onClick={() => openNotification("bottomRight")}
      >
        <Transformation radius="max" />
      </Image>
    </Context.Provider>
  );
};
export default Email;
