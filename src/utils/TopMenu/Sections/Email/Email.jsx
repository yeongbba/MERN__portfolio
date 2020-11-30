import React from "react";
// import styles from "./Email.module.css";
import { Button, notification } from "antd";
import "antd/dist/antd.css";

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
      <div onClick={openNotification}>Email</div>
    </Context.Provider>
  );
};
export default Email;
