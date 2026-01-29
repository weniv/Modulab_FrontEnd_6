import React, { useState } from 'react'




export default function App2() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
