import { useState } from "react";

function BetterSignUpForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = event => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    console.log(changedField, newValue);
  };
  return (
    <div>
      <label htmlFor='firstName'>Enter a first name: </label>
      <input
        type='text'
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}
        name='firstName'
        id='firstName'
      />
      <label htmlFor='lastName'>Enter a last name: </label>
      <input
        type='text'
        placeholder='Last Name'
        value={formData.lastName}
        onChange={handleChange}
        name='firstName'
        id='lastName'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignUpForm;
