import React from "react";
import { useDispatch } from "react-redux";
import { goFirstPage } from "./../../_actions/page_actions";
import { UpOutlined } from "@ant-design/icons";
import styles from "./BottomMenu.module.css";

const BottomMenu = () => {
  const dispatch = useDispatch();

  const onFirstPageHandler = () => {
    dispatch(goFirstPage());
  };

  return (
    <div className={styles.container} onClick={onFirstPageHandler}>
      <UpOutlined />
    </div>
  );
};

export default BottomMenu;
