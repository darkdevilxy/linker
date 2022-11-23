import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.querySelector('body') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)