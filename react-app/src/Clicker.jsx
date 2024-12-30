function handleClick() {
  console.log("Clicked the button.");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the Button</p>
      <button onclick={handleClick}>Click</button>
    </div>
  );
}
