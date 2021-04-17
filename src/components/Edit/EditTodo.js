import React, { useState } from "react";


function EditTodo({ editTodo, title, addTodo }) {
  const [inputValue, setInputValue] = useState(title);

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
    isEdit: true,
    isDone: false,
    }
    addTodo(newTodo);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className="new-input"
        onKeyDown={handleOnKeyDown}
        // call here handleInputValue func
        onChange={handleInputValue}
      />
      {/* onClick call saveNewTodo */}
      <button onClick={saveNewTodo}>Update Todo</button>
    </div>
  );
}

export default EditTodo;
