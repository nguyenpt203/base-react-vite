import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
  const myName = "NguyenPT";
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
