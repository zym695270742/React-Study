import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode 严格模式检查  only for dev mode
  // 识别过时的生命周期
  // 识别过时的API 方法
  // 检测意外副作用
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
