import React from 'react'

export default function TodoListItem({ todo }) {
  return (
    <li>
      <div className="view">
        <span>{todo.title}</span>
        <button>X</button>
      </div>
      <input className="edit-input" type="text" />
    </li>
  )
}
