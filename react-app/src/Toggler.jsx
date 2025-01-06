import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <p style={{ cursor: "pointer" }} onClick={toggleIsHappy}>
      {isHappy ? "😁" : "🤪"}
    </p>
  );
}
