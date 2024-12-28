export default function ShoppingList({ items }) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
