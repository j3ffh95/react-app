import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter.jsx";
import Dice from "./Dice.jsx";

function App() {
  return (
    <div>
      {/* <Greeter person='Jeff' age='29' />
      <Greeter person='Bill' age='29' />
      <Greeter person='Rosa' age='29' /> */}
      <Dice numSides={20} />
      <Dice numSides={6} />
      <Dice numSides={10} />
    </div>
  );
}

export default App;
