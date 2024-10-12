import React from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  const handleClickAddNewTodo = () => {
    alert("hi");
  };
  const handleOnChangeInput = (name) => {
    console.log(">>> check handleOnChangeInput: ", name);
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
