function handleClick() {
  console.log("Clicked the button.");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the Button</p>
      <button onMouseOver={handleClick}>Click</button>
    </div>
  );
}
