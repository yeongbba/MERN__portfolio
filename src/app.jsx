import React, { useState } from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increasePage, decreasePage } from "./_actions/page_actions";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";

const App = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.page);
  const page = state.page ? state.page : 1;

  const onIncreaseHandler = (e) => {
    e.preventDefault();
    dispatch(increasePage(page));
  };

  const onDecreaseHandler = (e) => {
    e.preventDefault();
    dispatch(decreasePage(page));
  };

  const TIME_OUT = 2000;
  return (
    <div className={styles.app}>
      <ReactScrollWheelHandler
        upHandler={onDecreaseHandler}
        downHandler={onIncreaseHandler}
        timeout={TIME_OUT}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        {page === 1 && <FirstPage />}
        {page === 2 && <SecondPage />}
        {page === 3 && <ThirdPage />}
      </ReactScrollWheelHandler>
    </div>
  );
};

export default App;
