import React from "react";

const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div>{JSON.stringify(todoList)}</div>
    </div>
  );
};

export default TodoData;
