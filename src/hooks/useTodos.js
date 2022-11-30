import { useState } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState([])

  //add
  const addTodos = (val) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
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
  const updateTodos = () => {}

  return { todos, addTodos, deleteTodos, updateTodos }
}
