import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  return (
    <>
      <h1>State Demo</h1>
      <ScoreKeeper />
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );
}

export default App;
