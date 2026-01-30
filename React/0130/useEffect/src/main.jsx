import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App3.jsx';
import NationList from './NationList.jsx';
import AutoSaveMemo from './AutoSaveMemo2.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
