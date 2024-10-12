import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);

  const addNewTodo = (name) => {
    alert(` Call me ${name}`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={() => addNewTodo("nguyen")} />
        <TodoData todoList={todoList} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
