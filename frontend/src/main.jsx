import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/UserContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import { JournalProvider } from './context/JournalContext.jsx'

export const server = "http://localhost:5000"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ChatProvider>
        <JournalProvider>
          <App />
        </JournalProvider>
      </ChatProvider> 
    </UserProvider>
  </BrowserRouter>
  </StrictMode>
  
)
