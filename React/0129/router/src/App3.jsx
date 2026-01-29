import React from 'react';
import { useState, useEffect } from 'react';

let number = 0;

function Test2() {
    number = number + 1
    return <h2>{number}번 입니다.</h2>
}

function Test() {
    return (
        <>
            <Test2 />
            <Test2 />
            <Test2 />
            <Test2 />
        </>
    )
}


function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // 1초마다 숫자를 1씩 증가시키는 타이머
        const timer = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        // 클린업 함수: 타이머 정리
        // return () => {
        //     clearInterval(timer); // 타이머 중지
        // };
    }, []);

    return <h1>{count}</h1>;
}

export default function App3() {
    return (
        <div>
            <Timer />
        </div>
    )
}
