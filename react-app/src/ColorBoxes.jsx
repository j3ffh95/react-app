import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes({ colors, count = 28 }) {
  const boxes = Array.from({ length: count }, (_, index) => (
    <ColorBox key={index} colorsList={colors} />
  ));
  return <div className='boxes'>{boxes}</div>;
}
