import { useContext, useState } from "react";
import "./AddTodo.css";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);

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
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
