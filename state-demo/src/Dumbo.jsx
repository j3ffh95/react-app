import { useState } from "react";

function generateGameBoard() {
  console.log("Making the Initial Game Board");
  return Array(5000);
}
export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard("Hello")}>Click me to change state</button>
  );
}
