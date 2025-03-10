import Die from "./Die";
import "./Dice.css";
import PropTypes from "prop-types";

function Dice({ dice, color }) {
  return (
    <section className='Dice'>
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}

Dice.propTypes = {
  dice: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default Dice;
