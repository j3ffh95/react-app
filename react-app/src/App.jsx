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
import Properties from "./Properties.jsx";
import Clicker from "./Clicker.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";

const data = [
  { id: 1, name: "eggs", quantity: 12, completed: true },
  { id: 2, name: "milk", quantity: 1, completed: false },
  { id: 3, name: "bacon", quantity: 3, completed: true },
  { id: 4, name: "sausage", quantity: 1, completed: false },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  { id: 129036, name: "Camp Pinnacle", rating: 4.69, price: 123 },
];

function App() {
  return (
    <div>
      <Counter num='1' />
      {/* <Form /> */}
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
      {/* <ShoppingList items={data} /> */}
      {/* <Properties properties={properties} /> */}
      {/* <Clicker
        message='Please Stop Clicking Me!!'
        buttonText='Do Not Click Me!'
      /> */}
    </div>
  );
}

export default App;
