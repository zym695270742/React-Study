import React, { useEffect, useMemo, useState } from 'react'
import useTodos from '../../hooks/useTodos'
import TodoListItem from './TodoListItem'
import TodoFilter from './TodoFilter'
import useStorage from '../../hooks/useStorage'
const todoStorageKey = 'react-todo-1'

export default function TodoList() {
  const { fetch, save } = useStorage()
  const { todos, addTodos, deleteTodos, updateTodos } = useTodos(JSON.parse(fetch(todoStorageKey)))
  const [newTodo, setNewTodo] = useState('')
  const [editedTodo, setEditedTodo] = useState({})
  const editInputRef = null
  const [filter, setFilter] = useState('all')
  const filteredTodos = useMemo(() => {
    if (filter === 'all') {
      return todos
    }
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed)
    }
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed)
    }
  }, [todos, filter])

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value)
  }
  const handleAddTodo = (e) => {
    if (e.code === 'Enter' && newTodo) {
      addTodos(newTodo)
    }
  }

  useEffect(() => {
    save(todoStorageKey, todos)
  }, [todos])

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
            {filteredTodos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} deleteTodos={deleteTodos} editedTodo={editedTodo} setEditedTodo={setEditedTodo} updateTodos={updateTodos} />
            ))}
          </ul>
        </div>
        <TodoFilter setFilter={setFilter} />
      </section>
    </>
  )
}
