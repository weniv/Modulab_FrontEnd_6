import { useState } from 'react'

// 그러면 useState에 어떤 기능이 '딸려' 있을까요?
// 바로 '리렌더링' + '변수 유지' 기능입니다!

function App() {

    let [count, setCount] = useState(0);
    let count2 = 0;

    console.log('나 다시 렌더링 되었어!');

    function handleCount(){
        setCount(count + 1);
    }

    function handleCount2(){
        count2 = count2 + 1;
        console.log(count2);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>+1</button>
            
            <h1>Count2: {count2}</h1>
            <button onClick={handleCount2}>+1</button>
        </>
    )
}

export default App
