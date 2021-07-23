import React, { useState } from "react";

const Todo = ({ todoName, setStatus, todoEdit, todoRemove }) => {
  const [todoStatus, setTodoStatus] = useState("Todo");

  return (
    <div>
      {todoName}
      {todoStatus}
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
};

export default Todo;
