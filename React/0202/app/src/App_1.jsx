import { useState } from 'react';

function App() {

    // 무거운 함수 C
    const c = () => {
        console.log('나는 무거운 함수야!!');
        return 0;
    }

    const [a, aa] = useState(0);
    const [b, bb] = useState(0);
    // 문제점: App 컴포넌트가 재렌더링 될 때마다 c() 함수가 실행된다.
    // 해결책: useState의 초기값으로 함수 c를 전달하면, 컴포넌트가 처음 렌더링 될 때만 c() 함수가 실행된다.
    const [count, setCount] = useState(c());

    return (
        <>
            {/* a변수 증가시키는 버튼 */}
            <button onClick={() => aa(a + 1)}>a 증가</button>
            a : {a}
            <br />

            {/* b변수 증가시키는 버튼 */}
            <button onClick={() => bb(b + 1)}>b 증가</button>
            b : {b}
            <br />
        </>
    )
}

export default App
