import { useState } from "react";

function Homepage({ onLogout }) {
    return (
        <div>
            <p>Home Page</p>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    );
}

function Login({ user, onLogin }) {
    console.log(user);
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    function handleLoginId(e) {
        // console.log(e.target.value);
        setInputId(e.target.value);
    }
    function handleLoginPw(e) {
        // console.log(e.target.value);
        setInputPw(e.target.value);
    }
    function handleLogin() {
        // 여기서 아이디, 비밀번호 검증 로직 추가 가능
        if (inputId === user.idUser && inputPw == user.pwUser) {
            onLogin();
        } else {
            alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    }
    return (
        <div>
            <p>Login Page</p>
            <input 
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={handleLoginId}
            />
            <input 
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={handleLoginPw}
            />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234,
    };

    function handleLogin() {
        setIsLogin(true);
    }

    function handleLogout() {
        setIsLogin(false);
    }
    return (
        <>
            {isLogin ? 
                <Homepage 
                    onLogout={handleLogout} 
                /> : 
                <Login 
                    user={user} 
                    onLogin={handleLogin} 
                />
            }
        </>
    );
}

export default App;