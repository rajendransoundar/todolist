import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  console.log(todos);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
          ))}
        </ul>
      </div>
    </div>
  );
}
