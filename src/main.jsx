import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import {UserProvider} from './components/ContextAPIDemo2/UserContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </StrictMode>,
)
