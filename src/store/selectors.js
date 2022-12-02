import { createSelector } from '@reduxjs/toolkit'
import { selectTodos } from './todoSlice'
import { selectTodoFilter } from './todoFilterSlice'

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectTodoFilter,
  (todos, todoFilter) => {
    if (todoFilter === 'all') {
      return todos
    }
    if (todoFilter === 'active') {
      return todos.filter((todo) => !todo.completed)
    }
    if (todoFilter === 'completed') {
      return todos.filter((todo) => todo.completed)
    }
    return todos
  }
)
