import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = index => {
    setScores(prevScores => {
      const copy = [...prevScores];
    });
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <button>+1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
