import Box from "./Box";
import { useState } from "react";
function BoxGrid({ numberOfBoxes = 9 }) {
  const [boxes, setBoxes] = useState(Array(numberOfBoxes).fill(false));
  const reset = () => {
    setBoxes(Array(numberOfBoxes).fill(false));
  };
  const allActive = () => {
    setBoxes(Array(numberOfBoxes).fill(true));
  };

  const toggleBox = idx => {
    setBoxes(prevBoxes => {
      return prevBoxes.map((value, i) => {
        if (i === idx) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };

  return (
    <div className='BoxGrid'>
      {boxes.map((b, idx) => (
        <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>Reset</button>
      <button onClick={allActive}>All Active</button>
    </div>
  );
}

export default BoxGrid;
