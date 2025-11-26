import React from 'react'

export const TodoList = (props) => {
    const {todoList, deleteTodo} = props
    const handleDelete = (index) =>{
        console.log("delete")
        const updatedTodo = todoList.filter((v, i)=> i !==index)
        deleteTodo(updatedTodo)
    }
  return (
    <div>
        <ol>
            {
                todoList.map((v,index) => <li key={index}>{v} <button onClick={()=>handleDelete(index)}>Delete</button></li>)
            }
        </ol>
    </div>
  )
}
