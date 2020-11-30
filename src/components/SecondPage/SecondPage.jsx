import React from "react";
import TestCode from "./Sections/TestCode/TestCode";
import Text from "./Sections/Text/Text";
import TopMenu from "../../utils/TopMenu/TopMenu";
// import styles from "./SecondPage.module.css";

const SecondPage = () => {
  return (
    <div>
      <TopMenu />
      <TestCode />
      <Text />
    </div>
  );
};

export default SecondPage;
