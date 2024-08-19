import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="addTodo">
      <input
        type="text"
        value={inputText}
        autoFocus
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add Your Next Todo"
      />
      <button
        onClick={() => {
          addTodo({ todoText: inputText });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
