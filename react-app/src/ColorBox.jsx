import "./ColorBox.css";
import { useState } from "react";
export default function ColorBox() {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    color == "yellow" ? setColor("blue") : setColor("yellow");
  };
  return (
    <div
      className='box'
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
