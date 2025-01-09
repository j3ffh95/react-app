import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(5);
  const incrementByOne = () => setCount(count + 1);
  const incrementByThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={incrementByOne}>+1</button>
      <button onClick={incrementByThree}>+3</button>
    </>
  );
}
