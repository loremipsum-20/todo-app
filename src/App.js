/*
1_ divide our UI in components: Think in React Way
  _ document layout => App.js
  _ input + add btn => NewTask
  _ list of todos => TaskList
  _ todo (delete btn) => Task
  _ extra: edit screen => EditTask

2_ Create NewTask UI
    - add it to App.js

3_ Work on App.js UI
4_ create TaskList UI
5_ create Task UI
6_ create Edit Task UI
*/

/*
1_ create Appjs and write general document html
2_ cretae child component and export it
3_ import child component in App.js
4_ Add child component to our App.js html <NewTodoInput />
5_ In our Child component, we write the html that we need
6_ we pass down information as props from our Appjs to our Child component
 // props are like custom html attributes
7_ we grab props in our child component
   // check the 3 different way how to gran props in your components
8_ we use thse props in child component html
*/
// How to add props
// 1_ take props with the whole prop obj
// function NewTodoInput(props}) {
// console.log(props) // is an obj of properties
// { labelBtn: 'Add New Todo BTN', placeholder: 'write your name here'}

// 2_ decostruct props properties in the functions brakets
// i.e. function NewTodoInput({ label, placeholder }) {

// 3_ decostructive props properties in a variable
//const { labelBtn, placeholder } = props;

import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";

const todosData = [
  /*{
    id: "134713749319748913",
    title: "Do grocery",
    isDone: false
  },
  {
    id: "34954629579425425",
    title: "Enjoy your eastern with family",
    isDone: false
  },
  {
    id: "724095784927859",
    title: "Learn about props",
    isDone: false
  }*/
];


export default function App() {
  const [todosState, setTodos] = useState(todosData);

  function handleDelete(todoId) {
    const newTodos = todosState.filter(({ id }) => id !== todoId);
    setTodos(newTodos);
  }
  function handleNewTodo(newTodo) {
    const newTodos = [...todosState, newTodo];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>
        To Do List
      </h1>
      </header>
      <main>
        <NewTodoInput addTodo={handleNewTodo} />
        <TodoList todos={todosState} deleteTodo={handleDelete} />
      </main>
      <footer>
        <p>© 2021</p>
      </footer>
    </div>
  );
}
