import React, { useState } from "react";
import Swal from "sweetalert2";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  // useState hook (getter & setter)
  const [valueInput, setValueInput] = useState(
    "Học ReactJS Cùng Nguyên Nhé 😁"
  );

  const handleClickAddNewTodo = () => {
    if (valueInput.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Warning 😥",
        text: "Please add a new todo...!",
        confirmButtonText: "Okay",
      });
      return;
    }
    addNewTodo(valueInput);
    setValueInput("");
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
          setValueInput(event.target.value);
        }}
        value={valueInput}
      />
      <button className="todo-new-btn" onClick={handleClickAddNewTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
