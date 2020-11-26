import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import WorkedAsAE from "./components/WorkedAsAE/WorkedAsAE";
import SoloProjects from "./components/SoloProjects/SoloProjects";
import styles from "./app.module.css";
import Blog from "./utils/Blog";
import Github from "./utils/Github";
import Email from "./utils/Email";

class App extends React.Component {
  // state = {
  //   page: 0,
  // };

  // clickHandler = () => {
  //   let count = this.state.page + 1;
  //   this.setState({ page: count });
  // };

  render() {
    return (
      <div className={styles.app}>
        <Github />
        <Blog />
        <Email />
        {/* <button onClick={this.clickHandler}>button</button>
        {this.state.page === 0 && <Start />}
        {this.state.page === 1 && <Introduction />}
        {this.state.page === 2 && <Home />}
        {this.state.page === 3 && <WorkedAsAE />}
        {this.state.page === 4 && <SoloProjects />} */}
      </div>
    );
  }
}

export default App;
