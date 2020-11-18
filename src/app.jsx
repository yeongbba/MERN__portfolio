import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      <Introduction />
    </div>
  );
}

export default App;
