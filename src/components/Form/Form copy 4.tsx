import { SetStateAction, useState } from "react";

export default function Form() {
  const [text, setText] = useState("hello");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
