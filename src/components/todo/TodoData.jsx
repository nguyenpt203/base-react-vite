import React from "react";

const TodoData = (props) => {
  const { todoData } = props;

  return (
    <div className="todo-data">
      {todoData.map((item) => {
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.valueData}</div>
            <button className="todo-item-btn">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
