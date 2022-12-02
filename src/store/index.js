import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import todoFilterReducer from './todoFilterSlice'
import { todoLocalStorage } from './middlewares'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoFilter: todoFilterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([todoLocalStorage, logger])
  },
})

export default store
