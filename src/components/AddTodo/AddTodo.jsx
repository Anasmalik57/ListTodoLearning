import { useState } from "react";
import "./AddTodo.css"

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="addTodo">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add Your Next Todo"
      />
      <button
        onClick={() => {
          updateList(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
