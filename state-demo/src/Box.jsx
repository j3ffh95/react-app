import "./Box.css";
import { useState } from "react";
function Box() {
  const [isActive, setIsActive] = useState(true);
  const toggleisActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      onClick={toggleisActive}
      className='Box'
      style={{ backgroundColor: isActive ? "red" : "black" }}
    ></div>
  );
}

export default Box;
