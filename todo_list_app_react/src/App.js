import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "todo1",
      id: 1,
    },
    {
      name: "todo2",
      id: 2,
    },
  ]);

  return (
    <>
      <h1>TODO List App</h1>
      <button>Add Task</button>
      <div className="todoApp">
        {todos.map((todo) => (
          <Todo todoName={todo.name} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
