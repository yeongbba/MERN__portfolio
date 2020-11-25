import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import WorkedAsAE from "./components/WorkedAsAE/WorkedAsAE";
import SoloProjects from "./components/SoloProjects/SoloProjects";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Start />
      {/* <Home /> */}
      {/* <Introduction /> */}
      {/* <WorkedAsAE /> */}
      {/* <SoloProjects /> */}
    </div>
  );
}

export default App;
