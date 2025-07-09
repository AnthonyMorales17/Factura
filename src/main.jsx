import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FacturaApp } from './FacturaApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FacturaApp /> 
  </StrictMode>,
)
//Cambio aquí para que coincida con el nombre del componente dentro del StrictMode