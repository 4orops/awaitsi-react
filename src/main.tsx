import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'
import WhatsAppCTA from './components/WhatsAppCTA'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
    <WhatsAppCTA />
  </StrictMode>,
)