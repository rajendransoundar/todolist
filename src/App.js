import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
      <h1>Todo List</h1>
    </header>
    <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText}/>
    <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  )
}
