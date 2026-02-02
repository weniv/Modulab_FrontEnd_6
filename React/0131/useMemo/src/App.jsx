import React, { useRef, useState } from 'react';
import { useMemo } from 'react';

function App() {
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const userNum = useMemo(() => getNum(userInfo), [userInfo]);

    function handleInputName(e) {
        setName(e.target.value);
        console.log('렌더링 - 이름 입력');
    }

    function handleInputId(e) {
        setId(e.target.value);
        console.log('렌더링 - 아이디 입력');
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newInfo = [...userInfo, { name, id }];
        setUserInfo(newInfo);
        nameRef.current.value = '';
        idRef.current.value = '';
        nameRef.current.focus();
        console.log('렌더링 - 제출');
    }

    // 렌더링이 발생할 때마다 호출되어 실행됩니다.
    function getNum(list) {
        console.log('렌더링!');
        return list.length;
    }

    return (
        <div className="app-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={handleInputName}
                    ref={nameRef}
                />
                <input
                    type="text"
                    placeholder="아이디를 입력하세요"
                    onChange={handleInputId}
                    ref={idRef}
                />
                <button type="submit">회원 등록</button>
            </form>
            {/* getNum 함수를 매 렌더링마다 호출해 실행하고, 결과가 화면에 표시됩니다. */}
            <span>현재 회원 수: {userNum}</span>
            <ul>
                {userInfo.map((value, index) => (
                    <li key={index}>
                        <h3>이름: {value.name}</h3>
                        <strong>아이디: {value.id}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;