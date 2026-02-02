import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App3.jsx'
import Test from './Test.jsx'
import InfiniteScroll from './infiniteScroll.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <InfiniteScroll />
    </StrictMode>,
)
