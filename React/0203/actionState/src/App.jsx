import { useState } from "react";

function LoginComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

        // id, password 둘중의 하나라도 falsy를 반환할 경우
        if (!id || !password) {
            alert('아이디와 비밀번호를 모두 작성해야합니다.');
            return;
        }
    }

    const handleReset = () => {
        setId('');
        setPassword('');
    }

    return (
        <>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">
                        아이디:
                        <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        비밀번호:
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                </div>
                <button type="submit">로그인</button>
                <button type="reset" onClick={handleReset}>초기화</button>
            </form>
        </>
    );
}


function App() {

    return (
        <>
            <LoginComponent />
        </>
    )
}

export default App
