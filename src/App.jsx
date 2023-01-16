import * as React from "react";
import "./App.css";
import CreateAccountSecti from "./components/CreateAccountSecti";
const App = () => {
  const propsData = {};
  return (
    <CreateAccountSecti
      className="screen-desktop-instance-1"
      {...propsData.ScreenDesktop}
    />
  );
};
export default App;
