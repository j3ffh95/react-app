import { useState } from "react";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState(["😃"]);
  const addEmoji = () => {
    setEmojis(oldEmojis => [...oldEmojis, "😘"]);
    // setEmojis([...emojis, "🤪"]);
  };
  return (
    <div>
      {emojis.map(e => (
        <span style={{ fontSize: "4rem" }}>{e}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
