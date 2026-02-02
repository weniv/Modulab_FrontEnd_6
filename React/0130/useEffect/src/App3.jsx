import { useMemo, useState } from 'react';

function load() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum;
}

function App() {
    const [count, setCount] = useState(0);
    // let result = useMemo(() => load(), []);
    let result = load();

    const handleCountUp = () => {
        setCount((prevCount) => prevCount + 1);
        // 업데이트 전의 count 값을 출력합니다.
        console.log(count);
    };

    return (
        <div>
            <h1>계산 결과 : {result}</h1>
            <div>{count}</div>
            <button onClick={handleCountUp}>UP!</button>
        </div>
    );
}
export default App;