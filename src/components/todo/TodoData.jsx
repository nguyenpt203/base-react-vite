import React from "react";
import Swal from "sweetalert2";

const TodoData = (props) => {
  const { todoData, deleteTodo } = props;

  const handleClickDeleteTodo = (idTodo) => {
    deleteTodo(idTodo);
    Swal.fire({
      icon: "success",
      title: "Success ",
      text: "Deleted todo success !",
      confirmButtonText: "Okay",
    });
  };

  return (
    <div className="todo-data">
      {todoData.map((item) => {
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.valueData}</div>
            <button
              onClick={() => {
                handleClickDeleteTodo(item.id);
              }}
              style={{ cursor: "pointer" }}
              className="todo-item-btn"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
