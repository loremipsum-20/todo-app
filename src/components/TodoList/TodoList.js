import React from "react";
import Todo from "../Todo/Todo.js";
import "./TodoList.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo
          key={index}
          id={todo.id}
          title={todo.title}
          isDone={todo.isDone}
          deleteTodo={deleteTodo}
          />
          ))}
      </ul>
      <button>Clear all</button>
    </div>
  );
}

export default TodoList;
