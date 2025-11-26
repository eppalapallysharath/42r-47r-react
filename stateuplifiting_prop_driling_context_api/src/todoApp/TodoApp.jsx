import React, { useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
export const TodoApp = () => {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h3>TodoApp</h3>
        <TodoInput setTodos={setTodos} todos={todos}/>
        <TodoList todoList={todos} deleteTodo= {setTodos}/>
    </div>
  )
}
