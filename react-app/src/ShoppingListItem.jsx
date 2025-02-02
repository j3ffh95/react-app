// import PropTypes from "prop-types";

function ShoppingListItem({ name, quantity, completed }) {
  const styles = {
    color: completed ? "firebrick" : "green",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <li style={styles}>
      {name} - {quantity}
    </li>
  );
}

// Adding propTypes to the component
// ShoppingListItem.propTypes = {
//   name: PropTypes.string,
//   quantity: PropTypes.number,
//   completed: PropTypes.bool,
// };

export default ShoppingListItem;

{
  /* <li
            key={item.id}
            style={{
              color: item.completed ? "firebrick" : "grey",
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.name}
          </li> */
}
