import { useState } from "react";

function BetterSignUpForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor='firstName'>Enter a first name: </label>
      <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={updateFirstName}
        id='firstName'
      />
      <label htmlFor='lastName'>Enter a last name: </label>
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={updateLastName}
        id='lastName'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignUpForm;
