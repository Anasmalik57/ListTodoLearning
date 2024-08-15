import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "todoData 1", finished: false },
    { id: 2, todoData: "todoData 2", finished: false },
  ]);
  return (
    <>
    <h2>Todo List App</h2>
      <TodoContext.Provider value={{ list, setList }}>
        <AddTodo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, todoData: todo, finished: false },
            ])
          }
        />
        <TodoList />
      </TodoContext.Provider>

    </>
  );
}

export default App;
