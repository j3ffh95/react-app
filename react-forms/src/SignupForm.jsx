import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = event => {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  };
  const updateLastName = event => {
    // console.log(event.target.value);
    setLastName(event.target.value);
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
      <button>Submit</button>
    </div>
  );
}

export default SignupForm;
