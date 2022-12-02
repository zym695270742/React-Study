import React, { useState } from 'react'
import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'
import { selectFilteredTodos } from '../../store/selectors'

export default function TodoListContent() {
  const filteredTodos = useSelector(selectFilteredTodos)
  const [editedTodo, setEditedTodo] = useState({})

  return (
    <div>
      <h2>待办项</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
          />
        ))}
      </ul>
    </div>
  )
}
