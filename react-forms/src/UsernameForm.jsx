import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("Jefferson");
  const updateUsername = event => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
