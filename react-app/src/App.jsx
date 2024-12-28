import "./App.css";
import Chicken from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Dice from "./Dice.jsx";
import ListPicker from "../ListPicker.jsx";
import DoubleDice from "./DoubleDice.jsx";
import Heading from "./Heading.jsx";
import ColorList from "./ColorList.jsx";
import Slots from "./Slots.jsx";
import ShoppingList from "./ShoppingList.jsx";

const data = [
  { id: 1, name: "eggs", quantity: 12, completed: true },
  { id: 2, name: "milk", quantity: 1, completed: false },
  { id: 3, name: "bacon", quantity: 3, completed: true },
  { id: 4, name: "sausage", quantity: 1, completed: false },
];

function App() {
  return (
    <div>
      {/* <Heading color='magenta' text='Welcome' fontSize='20px' />
      <Heading text='hello' />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ListPicker values={[1, 2, 3]} />
      <Chicken />
      <Greeter person='Jeff' age='29' />
      <Greeter age='29' />
      <Greeter person='Rosa' age='29' />
      <Dice numSides={20} />
      <Dice />
      <Dice numSides={10} />
      <ColorList
        colors={["red", "orange", "yellow", "green", "blue", "PURPLE"]}
      />
      <Slots val1='🍒' val2='🍒' val3='🍒' />
      <Slots val1='🍒' val2='🍒' val3='🥶' />
      <Slots val1='🥶' val2='🥶' val3='🥶' /> */}
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
