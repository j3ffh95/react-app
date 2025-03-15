import "./Button.css";

function Button({ clickFunction, label = "Click Me" }) {
  return (
    <button onClick={clickFunction} className='Button'>
      {label}
    </button>
  );
}

export default Button;
