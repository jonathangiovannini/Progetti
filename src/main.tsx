import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import { AuthProvider } from './components/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
=======

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
>>>>>>> 9cb8f19 (connessione backend)
  </StrictMode>,
)
