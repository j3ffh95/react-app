import "./Property.css";
export default function Property({ name, price, rating }) {
  return (
    <div className='property-component'>
      <h2>{name}</h2>
      <h4>${price} a night</h4>
      <h4>{rating}⭐</h4>
    </div>
  );
}
