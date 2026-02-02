import { useState, useEffect } from 'react'

// 그러면 useEffect에 어떤 기능이 '딸려' 있을까요?
// 바로 '특정 상태 감시' 기능입니다!

function App() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('count1만 감시하는 함수야!');
    }, [count1])

    return (
        <div>
            <h1>count1 : {count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>count1 증가</button>

            <h1>count2 : {count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>count2 증가</button>
        </div>
    )
}

export default App
