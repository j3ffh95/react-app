import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes({ colors, count = 28 }) {
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  //   console.log(randomColor);

  const boxes = Array.from({ length: count }, (_, index) => (
    <ColorBox
      key={index}
      colorFromColorBoxes={randomColor()}
      colorsList={colors}
    />
  ));
  return <div className='boxes'>{boxes}</div>;
}
