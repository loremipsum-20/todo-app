import React from "react";
import "./Todo.css";

function Todo( { title, isDone, id, completedTodo, deleteTodo, saveTodo }) {
  return (
    //add contitional {isEdit ? } but wrap in div to use HTML Tag, every return should have only onne child
    <li className={isDone ? "itemDone" : ""}>
    <div>
    <input
    type="checkbox"
    className="checkbox"
    checked={isDone}
    onChange={() => completedTodo(id)}
     />
    {title}
    </div>
    <button onClick={() => deleteTodo(id)} className="delete"><i className="fa fa-trash"></i></button>
    </li>
  );
}

export default Todo;
