import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul></ul>
    </div>
  );
}
