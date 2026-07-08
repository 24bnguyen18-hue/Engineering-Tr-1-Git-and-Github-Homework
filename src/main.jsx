import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //adding the page design to the main.jsx file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)