import React, { useState } from "react";
import "./todo.css";
import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import reactLogo from "../../assets/react.svg";

const TodoApp = () => {
  const [todoData, setTodoData] = useState([]);

  const addNewTodo = (valueData) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      valueData: valueData,
    };

    setTodoData([...todoData, newTodo]);
  };

  const deleteTodo = (idTodo) => {
    const newTodo = todoData.filter((item) => {
      return item.id !== idTodo;
    });
    setTodoData(newTodo);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {todoData.length > 0 ? (
          <TodoData todoData={todoData} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoApp;
