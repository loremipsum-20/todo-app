import React from "react";
import "./Todo.css";

function Todo( { title, isDone, id, deleteTodo }) {
  return (
    <li>
    <div>
    <input type="checkbox" className="checkbox" defaultChecked={isDone} />
    {title}
    </div>
    <button onClick={() => deleteTodo(id)} className="delete"><i className="fa fa-trash"></i></button>
    </li>
  );
}

export default Todo;
