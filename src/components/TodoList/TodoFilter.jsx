import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTodoFilter } from '../../store/todoFilterSlice'

export default function TodoFilter({ setFilter }) {
  const dispatch = useDispatch()

  return (
    <div className="todo-filter">
      <button
        onClick={() => {
          dispatch(setTodoFilter('all'))
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(setTodoFilter('active'))
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          dispatch(setTodoFilter('completed'))
        }}
      >
        Completed
      </button>
    </div>
  )
}
