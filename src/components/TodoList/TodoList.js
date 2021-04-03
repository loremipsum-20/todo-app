import React from "react";
import Todo from "../Todo/Todo.js";
import "./TodoList.css";

function TodoList( {todos} ) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} title={todo.title} isDone={todo.isDone} />
          ))}
      </ul>
      <button>Clear all</button>
    </div>
  );
}

export default TodoList;
