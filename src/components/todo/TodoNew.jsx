import React, { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  // useState hook (getter & setter)
  const [valueInput, setValueInput] = useState("NguyenPhung");

  const handleClickAddNewTodo = () => {
    console.log(">>> check valueInput:", valueInput);
    addNewTodo(valueInput);
  };

  // valueOnChangeInput: nhận giá trị từ onChange
  const handleOnChangeInput = (valueOnChangeInput) => {
    setValueInput(valueOnChangeInput);
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
