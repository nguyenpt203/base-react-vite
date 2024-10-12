import React, { useState } from "react";

const TodoNew = (props) => {
  // useStack hook
  const [valueInput, setValueInput] = useState("NguyenPhung");

  const handleClickAddNewTodo = () => {
    console.log(">>> check value input", valueInput);
  };

  const handleOnChangeInput = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        className="todo-new-input"
        type="text"
        name=""
        id=""
        placeholder="Add new todo ..."
        onChange={(event) => {
          handleOnChangeInput(event.target.value);
        }}
      />
      <button className="todo-new-btn" onClick={handleClickAddNewTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
