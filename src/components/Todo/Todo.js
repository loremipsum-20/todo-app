import React, { useState } from "react";
import "./Todo.css";
import EditTodo from "../EditTodo/EditTodo.js";

function Todo( { title, isDone, id, completedTodo, deleteTodo, editTodo }) {
  const [isEdit, setIsEdit] = useState(false);

  function newEditState(boolean) {
    setIsEdit(boolean);
  }

  return (
    <div>
      {isEdit ? (
        <EditTodo
          title={title}
          handleIsEdit={newEditState}
          editTodo={editTodo}
          id={id}
        />
      ) : (

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
    <div>
    <button onClick={() => newEditState(true)} className="delete"><i className="fa fa-pencil"></i></button>
    <button onClick={() => deleteTodo(id)} className="delete"><i className="fa fa-trash"></i></button>
    </div>
    </li>
  )
}
</div>
);
}

export default Todo;
