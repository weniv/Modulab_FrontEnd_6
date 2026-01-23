function Homepage() {
    return (
        <div>
            <p>Home Page</p>
        </div>
    );
}

function Login({ user }) {
    console.log(user);
    function a(e) {
        console.log(e.target.value);
    }
    function b(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <p>Login Page</p>
            <input 
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={a}
            />
            <input 
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={b}
            />
            <button>로그인</button>
        </div>
    );
}

function App() {
    const isLogin = false;
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234,
    };
    return (
        <>
            {isLogin ? <Homepage /> : <Login user={user} />}
        </>
    );
}

export default App;