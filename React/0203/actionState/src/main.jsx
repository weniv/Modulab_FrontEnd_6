import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App4.jsx'
import App3 from './App3.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
