import React, { useState } from "react";
import "./NewTodoInput.css";


function NewTodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleOnKeyDown({ keyCode }) {
    if (keyCode === 13) {
      saveNewTodo();
    }
  }

  function handleInputValue({target}) {
    setInputValue(target.value)
  }

  function saveNewTodo() {
    const newTodo = {
    id: (Date.now() + Math.random()).toString(),
    title: inputValue,
    isDone: false
    };

    addTodo(newTodo);
    setInputValue("");
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className="new-input"
        placeholder="write your task here"
        onKeyDown={handleOnKeyDown}
        // call here handleInputValue func
        onChange={handleInputValue}
      />
      {/* onClick call saveNewTodo */}
      <button onClick={saveNewTodo}>Add New Todo</button>
    </div>
  );
}

export default NewTodoInput;
