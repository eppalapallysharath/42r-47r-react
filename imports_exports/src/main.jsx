import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hello,{Child} from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
    <Child/>
  </StrictMode>,
)
