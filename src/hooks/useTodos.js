import { useState } from 'react'

export default function useTodos(initialState) {
  const [todos, setTodos] = useState(initialState || [])

  //add
  const addTodos = (val) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: val,
        completed: false,
      },
    ])
  }

  //delete
  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  //update
  const updateTodos = (editedTodo) => {
    const todo = todos.find((item) => item.id === editedTodo.id)
    Object.assign(todo, editedTodo)
    setTodos([...todos])
  }

  return { todos, addTodos, deleteTodos, updateTodos }
}
