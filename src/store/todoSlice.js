import { createSlice } from '@reduxjs/toolkit'
import useStorage from '../hooks/useStorage'
const { fetch, save } = useStorage()

const initialState = {
  value: JSON.parse(fetch('react-todo')) || [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: ({ value }, { payload: title }) => {
      value.push({
        id: new Date().getTime(),
        title,
        completed: false,
      })
    },
    deleteTodo: ({ value }, { payload: id }) => {
      const index = value.findIndex((todo) => todo.id === id)
      value.splice(index, 1)
    },
    updateTodo: ({ value }, { payload: editedTodo }) => {
      const todo = value.find((todo) => todo.id === editedTodo.id)
      Object.assign(todo, editedTodo)
    },
  },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export const selectTodos = (state) => state.todo.value

export default todoSlice.reducer
