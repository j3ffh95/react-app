import "./ColorBox.css";
import { useState } from "react";
export default function ColorBox({ colorsList, colorFromColorBoxes }) {
  const randomColor = () =>
    colorsList[Math.floor(Math.random() * colorsList.length)];

  const [color, setColor] = useState(colorFromColorBoxes);
  const changeColor = () => {
    setColor(randomColor);
  };
  return (
    <div
      className='box'
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
