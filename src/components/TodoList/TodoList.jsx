import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import TodoListItem from './TodoListItem'

export default function TodoList() {
  const { todos, addTodos } = useTodos()
  const { newTodo, setNewTodo } = useState('')
  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value)
  }
  const handleAddTodo = () => {
    addTodos(newTodo)
  }

  return (
    <>
      <header>
        <h1>待办事项</h1>
      </header>
      <section>
        <div>
          <input autoFocus type="text" value={newTodo} onChange={handleNewTodoChange} onKeyUp={handleAddTodo} />
        </div>
        <div>
          <h2>待办项</h2>
          <ul>
            {todos.map((todo) => (
              <TodoListItem todo={todo} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
