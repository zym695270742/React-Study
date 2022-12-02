import React, { useState } from 'react'
import { addTodo } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'

export default function TodoAdd() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleAddTodo = (e) => {
    if (e.code === 'Enter' && newTodo) {
      dispatch(addTodo(newTodo))
    }
  }

  return (
    <div>
      <input
        autoFocus
        type="text"
        value={newTodo}
        onChange={handleNewTodoChange}
        onKeyUp={handleAddTodo}
      />
    </div>
  )
}
