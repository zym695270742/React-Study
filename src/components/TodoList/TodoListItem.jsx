import React, { useEffect, useRef } from 'react'

export default function TodoListItem({
  todo,
  deleteTodos,
  editedTodo,
  setEditedTodo,
  updateTodos,
}) {
  const editInputRef = useRef()

  useEffect(() => {
    if (editedTodo.id === todo.id) {
      editInputRef.current.focus()
    }
  }, [editedTodo])

  const handleDeleteTodos = () => {
    deleteTodos(todo.id)
  }
  const handleEditTodo = () => {
    setEditedTodo(todo)
  }
  const handleEditing = (e) => {
    setEditedTodo({
      ...todo,
      title: e.target.value,
    })
  }

  const handleUpdateTodo = (e) => {
    if (e.code === 'Enter' && editedTodo.title) {
      updateTodos(editedTodo)
      setEditedTodo({})
    }
  }

  const handleCancelEdit = () => {
    setEditedTodo({})
  }

  const handleDone = () => {
    updateTodos({
      ...todo,
      completed: true,
    })
    setEditedTodo({})
  }

  return (
    <li
      className={[
        'todo-list-item',
        editedTodo?.id === todo.id ? 'editing' : '',
        todo.completed ? 'completed' : '',
      ].join(' ')}
    >
      <div className="view">
        <span onDoubleClick={handleEditTodo}>{todo.title}</span>
        <button onClick={handleDeleteTodos}>X</button>
        {!todo.completed && <button onClick={handleDone}>Done</button>}
      </div>
      <input
        ref={editInputRef}
        className="edit-input"
        type="text"
        value={editedTodo.title}
        onChange={handleEditing}
        onKeyUp={handleUpdateTodo}
        onBlur={handleCancelEdit}
      />
    </li>
  )
}
