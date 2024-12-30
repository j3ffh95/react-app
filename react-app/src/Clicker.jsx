function handleClick() {
  console.log("Clicked the button.");
}

function handleHover() {
  console.log("you hover over.");
}

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleHover}>Hover over me</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
