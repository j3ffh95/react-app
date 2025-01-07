import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <>
      <p style={{ cursor: "pointer" }} onClick={toggleIsHappy}>
        {isHappy ? "😁" : "🤪"}
      </p>
      <button onClick={setCount(count + 2)}>{count}</button>
    </>
  );
}
