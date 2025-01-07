import { useState } from "react";
export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);
  return (
    <>
      <p style={{ cursor: "pointer" }} onClick={toggleIsHappy}>
        {isHappy ? "😁" : "🤪"}
      </p>
      <button onClick={incrementCount}>{count}</button>
    </>
  );
}
