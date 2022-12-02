// 自定义 redux middlewares
import useStorage from '../hooks/useStorage'

export const todoLocalStorage = function ({ dispatch, getState }) {
  const { fetch, save } = useStorage()
  return (next) => (action) => {
    const returnValue = next(action)
    //只要是todo变化， 就更新到localStorage
    if (action.type.startsWith('todo/')) {
      save('react-todo', getState().todo.value)
    }
    return returnValue
  }
}
