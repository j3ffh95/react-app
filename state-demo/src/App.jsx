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
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sameNums(dice) {
  return dice.every(v => v === dice[0]);
}

function App() {
  return (
    <>
      <BoxGrid numberOfBoxes={40} />
      {/* <LuckyN title='Roll less than 4!' winCheck={lessThan4} />
      <LuckyN title='Roll the same numbers!' winCheck={sameNums} /> */}
      {/* <Dice dice={[1, 2, 3]} />
      <Dice dice={[1, 2, 3, 5, 2, 5, 8]} color='green' />
      <Dice dice={[1, 2, 3]} /> */}
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
