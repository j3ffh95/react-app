export default function Dice({ numSides = 6 }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <p>
      1 to {numSides} - Dice Roll: {roll}
    </p>
  );
}
