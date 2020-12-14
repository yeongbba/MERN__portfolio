import React from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increasePage, decreasePage } from "./_actions/page_actions";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthPage from "./components/FourthPage/FourthPage";

const App = () => {
  const TIME_OUT = 2000;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.page);
  const page = state.page ? state.page : 0;

  const onIncreaseHandler = () => {
    dispatch(increasePage(page));
  };

  const onDecreaseHandler = () => {
    dispatch(decreasePage(page));
  };

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
        <Carousel
          axis={"vertical"}
          verticalSwipe={"standard"}
          useKeyboardArrows={true}
          showArrows={false}
          autoFocus={true}
          selectedItem={page}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          transitionTime={500}
        >
          <div>
            <FirstPage />
          </div>
          <div>
            <SecondPage />
          </div>
          <div>
            <ThirdPage />
          </div>
          <div>
            <FourthPage />
          </div>
        </Carousel>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default App;
