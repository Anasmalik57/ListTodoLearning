import { useState } from "react";
import "./Todo.css"

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div className="container">
      <div className="sub-container">
      <input id="checkbox"
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEditing ? (
        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{todoData}</span>
      )}
      <button id="editbtn"
        onClick={() => {
          setIsEditing(!isEditing);
          onEdit(editText)
        }}
      >
        {!isEditing ? `Edit` : `Save`}
      </button>
      <button id="deletbtn" onClick={onDelete}>Delete</button>
    </div>
    </div>
  );
}

export default Todo;
