import React from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  return (
    <div className="todo-new">
      <input
        className="todo-new-input"
        type="text"
        name=""
        id=""
        placeholder="Add new todo ..."
      />
      <button className="todo-new-btn" onClick={addNewTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
