import { useState } from "react";

function BetterSignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = event => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFormData(currData => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
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
        name='lastName'
        id='lastName'
      />
      <label htmlFor='password'>Enter a password: </label>
      <input
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        name='password'
        id='password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignUpForm;
