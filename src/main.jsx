import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRick } from './AppRick'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRick />
  </StrictMode>,
)
