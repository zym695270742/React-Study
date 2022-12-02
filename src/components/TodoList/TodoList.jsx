import React from 'react'
import TodoAdd from './TodoAdd'
import TodoListContent from './TodoListContent'
import TodoFilter from './TodoFilter'

export default function TodoList() {
  return (
    <>
      <header>
        <h1>待办事项</h1>
      </header>
      <section>
        <TodoAdd />
        <TodoListContent />
        <TodoFilter />
      </section>
    </>
  )
}
