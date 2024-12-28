import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <ShoppingListItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            completed={item.completed}
          />
          //   <ShoppingListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
