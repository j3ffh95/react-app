import "./Die.css";
import PropTypes from "prop-types";

function Die({ val, color = "slateblue" }) {
  return (
    <div className='Die' style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

Die.propTypes = {
  val: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Die;
