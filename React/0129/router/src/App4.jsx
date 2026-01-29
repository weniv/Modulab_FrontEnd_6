import { useRef, useState } from 'react';


function Counter() {

    let myCount = 0;

    const count = useRef(0);
    const [test, setTest] = useState(0);
    console.log(`화면 렌더링 발생`);

    // 클릭하면 변수의 값 증가, 렌더링 발생 X
    const handleCountUp = (e) => {
        count.current = count.current + 1;
        console.log(`count.current: ${count.current}`);
    };

    const handleTest = (e) => {
        setTest(test + 1);
        console.log(`test: ${test}`);
    };

    return (
        <div>
            <div>{count.current}</div>
            <button onClick={handleCountUp}>증가</button>
            <button onClick={handleTest}>테스트</button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

export default App;