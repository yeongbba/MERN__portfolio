import React from "react";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import WorkedAsAE from "./components/WorkedAsAE/WorkedAsAE";
import SoloProjects from "./components/SoloProjects/SoloProjects";
import styles from "./app.module.css";
import Buttons from "./utils/Buttons/Buttons";
import Nav from "./utils/Nav/Nav";
import { MenuOutlined } from "@ant-design/icons";

import FirstPage from "./components/FirstPage/FirstPage";

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
        <FirstPage />
        {/* <Home />
        <div className={styles.menu}>
          <MenuOutlined />
        </div>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.buttons}>
          <Buttons />
        </div> */}

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
