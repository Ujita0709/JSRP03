import { useState } from "react";   // ← これが絶対必要

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>あなたの入力： {text}</p>
    </div>
  );
}

export default TextInput;
