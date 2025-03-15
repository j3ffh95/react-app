import { useState } from "react";
function LuckyN({ numDice = 2, goal = 7 }) {
  const [dice, setDice] = useState(getRolls(numDice));
}

export default LuckyN;
