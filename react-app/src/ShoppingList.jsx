function ShoppingList({ items }) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              color: item.completed ? "firebrick" : "grey",
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
