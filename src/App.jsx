import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import TodoDispatchContext from "./context/TodoDispatchContext";
import todoReducer from "./reducers/todoReducer";

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "todoData 1", finished: false },
  //   { id: 2, todoData: "todoData 2", finished: false },
  // ]);

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <h2>Todo List App</h2>
      <TodoContext.Provider value={{ list }}>
        <TodoDispatchContext.Provider value={{ dispatch }}>
          <AddTodo  />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </>
  );
}

export default App;
