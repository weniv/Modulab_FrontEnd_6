import React, { createContext, use, useContext } from 'react'

const ThemeContext = createContext('light');

function ThemeText() {
    const theme = use(ThemeContext);

    return (
        <p style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }} >현재 사용중인 테마</p>
    )
}

export default function App3() {
    return (
        <div>
            <ThemeContext value='dark'>
                <ThemeText />
            </ThemeContext>
        </div>
    )
}
