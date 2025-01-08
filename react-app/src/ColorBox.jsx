import "./ColorBox.css";
import { useState } from "react";
export default function ColorBox({ colorsList }) {
  const randomColor = () =>
    colorsList[Math.floor(Math.random() * colorsList.length)];

  const [color, setColor] = useState(randomColor);
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
