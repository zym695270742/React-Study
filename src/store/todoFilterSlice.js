import { createSlice } from '@reduxjs/toolkit'

const initialState = 'all'

const todoFilterSlice = createSlice({
  name: 'todoFilter',
  initialState,
  reducers: {
    setTodoFilter: (state, { payload: todoFilter }) => {
      return todoFilter
    },
  },
})

export const { setTodoFilter } = todoFilterSlice.actions

export const selectTodoFilter = (state) => state.todoFilter

export default todoFilterSlice.reducer
