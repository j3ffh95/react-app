import "./Button.css";

function Button({ clickFunction }) {
  return (
    <button onClick={clickFunction} className='Button'>
      Click me
    </button>
  );
}

export default Button;
