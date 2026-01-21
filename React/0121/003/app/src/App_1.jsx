import './App.css'

function App() {
    const name = 'hojun';
    const number = 123;
    function add(a, b){
        return a + b;
    }
    const isLogin = true;

    // JSX 문법
    // 1. 반드시 하나의 부모 요소로 감싸져 있어야 한다.
    // 2. class 대신 className 사용
    // 3. style은 객체 형태로 작성하거나 .css 파일로 밖으로 빼서 파일로 작성
    // 4. 반드시 닫아줘야 합니다. (ex. <input />, <br />)
    // 6. 주석은 {/*  이렇게 작성합니다. */}
    // 7. 지금 주석을 쓰고 있는 공간은 자바스크립트 공간입니다.
    return (
        <>
            <h1 className='one'>hello world</h1>
            {/* 주석입니다! 여기는 JSX 공간이에요! */}
            Hello Vite-React!
            {1 + 1}
            <div>안녕하세요 {name}입니다.</div>
            <div>{number * 3}</div>
            {console.log('hello world')}
            {add(1, 2) + add(3, 4)}
            
            {/* 삼항 연산자를 이용한 조건부 렌더링 */}
            {isLogin ? <div>로그인 상태입니다.</div> : <div>로그아웃 상태입니다.</div>}
            
            {/* &&를 이용한 조건부 렌더링 */}
            {isLogin && <p>로그인 상태입니다!!!</p>}
        </>
    )
}

export default App
