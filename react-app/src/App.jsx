import "./App.css";
import Chicken from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Dice from "./Dice.jsx";
import ListPicker from "../ListPicker.jsx";

function App() {
  return (
    <div>
      <ListPicker values={[1, 2, 3]} />
      {/* <Chicken />
      <Greeter person='Jeff' age='29' />
      <Greeter age='29' />
      <Greeter person='Rosa' age='29' />
      <Dice numSides={20} />
      <Dice />
      <Dice numSides={10} /> */}
    </div>
  );
}

export default App;
