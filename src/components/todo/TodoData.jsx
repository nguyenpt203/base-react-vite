import React from "react";

const TodoData = (props) => {
  const { dataTodo } = props;

  return (
    <div className="todo-data">
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div>{JSON.stringify(dataTodo)}</div>
    </div>
  );
};

export default TodoData;
