// function handleClick(message) {
//   alert(message);
// }

// function handleHover() {
//   console.log("you hover over.");
// }

export default function Clicker({ message, buttonText }) {
  const handleClick = () => alert(message);
  return (
    <div>
      {/* <p onMouseOver={handleHover}>Hover over me</p> */}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
