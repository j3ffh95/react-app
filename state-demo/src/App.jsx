import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import Lucky7 from "./Lucky7";
import Die from "./Die";
import Dice from "./Dice";

function App() {
  return (
    <>
      <Dice dice={[1, 2, 3]} />
      {/* <Die val='2' /> */}
      {/* {<Lucky7 />} */}
      {/* <h1>State Demo</h1> */}
      {/* <ScoreKeeper numPlayers={10} target={3} /> */}
      {/* <EmojiClicker /> */}
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );
}

export default App;
