import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

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

  const addTodo = (event) => {
    event.preventDefault();
    const content = event.target.todoName.value;
    let newTodo = {
      name: content,
      id: Math.floor(Math.random() * 100),
    };
    let newTodos = todos.concat(newTodo);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TODO List App</h1>
      <button>Add Task</button>
      <TodoForm addTodo={addTodo} />
      <div className="todoApp">
        {todos.map((todo) => (
          <Todo todoName={todo.name} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
