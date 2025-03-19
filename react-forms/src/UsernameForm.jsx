import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("Jefferson");
  return (
    <div>
      <input type='text' placeholder='Username' value={username} />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
