import React from "react";

const TodoForm = ({ addTodo }) => {
  return (
    <div>
      <form onSubmit={addTodo}>
        <div>
          <input name="todoName" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default TodoForm;
