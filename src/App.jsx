import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/learn/MyComponent";
import SecondComponent from "./components/learn/SecondComponent";

const App = () => {
  return (
    <>
      <MyComponent />
      <SecondComponent />
    </>
  );
};

export default App;
