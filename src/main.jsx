import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Subscription from './Subscription'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Subscription />
  </StrictMode>,
)
