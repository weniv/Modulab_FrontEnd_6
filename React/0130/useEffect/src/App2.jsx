import { useEffect, useRef, useState } from 'react';

function App() {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const formRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    function signUp(e) {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        setWelcomeMessage(`${emailRef.current.value}님 환영합니다!`);
        formRef.current.reset();
    }

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <div>
            <form ref={formRef} onSubmit={signUp}>
                <h1>회원가입</h1>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        autoComplete="off"
                        required
                    />
                </div>
                <button type="submit">회원가입</button>
            </form>
            {welcomeMessage && <p>{welcomeMessage}</p>}
        </div>
    );
}

export default App;