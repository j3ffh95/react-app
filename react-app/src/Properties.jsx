import Property from "./Property.jsx";
import "./Property.css";
function Properties({ properties }) {
  return (
    <div className='properties-container'>
      {properties.map(property => (
        <Property
          key={property.id}
          name={property.name}
          price={property.price}
          rating={property.rating}
        />
        // <Property key={property.id} {...property} />
      ))}
    </div>
  );
}

export default Properties;
