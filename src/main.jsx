import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserProvider from './components/ContextAPIDemo/UserProvider'

import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </StrictMode>,
)
