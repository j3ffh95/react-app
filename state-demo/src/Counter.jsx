import { useState } from "react";

export default function Counter() {
  console.log("RENDERED!!!");
  const [count, setCount] = useState(0);
  const incrementByOne = () => setCount(count + 1);

  const setToTen = () => {
    setCount(10);
  };
  const incrementByThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  const incrementByFive = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={incrementByOne}>+1</button>
      <button onClick={incrementByThree}>+3</button>
      <button onClick={incrementByFive}>+5</button>
      <button onClick={setToTen}>Set to 10</button>
    </>
  );
}
