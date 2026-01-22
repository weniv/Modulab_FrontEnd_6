import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    return (
        <>
            <h2>카운터</h2>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </>
    );
}

function App() {

    return (
        <>
            <Counter/>
        </>
    )
}

export default App
