import React, { useState } from "react";

function EditTodo({ title, id, handleIsEdit, editTodo }) {
  const [inputValue, setInputValue] = useState(title);

  function handleSaveButton() {
    handleIsEdit(false);
    editTodo(id, inputValue);
  }

  function handleInputValue({ target }) {
    setInputValue(target.value);
  }

  return (
    <div>
      <input onChange={handleInputValue} value={inputValue} />
      <button onClick={handleSaveButton}>Save Edit</button>
    </div>
  );
}

export default EditTodo;
