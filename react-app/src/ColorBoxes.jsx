import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes({ count = 28 }) {
  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51BF",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FF9800",
    "#FF5722",
  ];
  const boxes = Array.from({ length: count }, (_, index) => (
    <ColorBox key={index} colorsList={colors} />
  ));
  return <div className='boxes'>{boxes}</div>;
}
