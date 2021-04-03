import React from "react";
import "./Todo.css";

function Todo( { title }) {
  return (
    <li>
    <div>
    <input type="checkbox" class="checkbox" />
    {title}
    </div>
    <button class="delete"><i class="fa fa-trash"></i></button>
    </li>
  );
}

export default Todo;
