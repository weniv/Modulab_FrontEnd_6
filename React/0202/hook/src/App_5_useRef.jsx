import { useRef } from 'react'

// 그러면 useRef에 어떤 기능이 '딸려' 있을까요?
// DOM 조작 기능이 있습니다.

function App() {

    const inputRef = useRef(null)

    function handleClick() {
        console.log(inputRef.current)
        inputRef.current.focus()
        // inputRef.current는 우리가 참조하고 있는 실제 DOM 요소를 가리킵니다.
        // 바닐라 JS에서 document.getElementById('id명') 같은 역할을 해줍니다.
        // document.querySelector('input').focus() 도 같은 코드입니다.
        // 궁금증: 왜 document.getElementById('id명') 또는 document.querySelector('클래스명') 등을 쓰지 않을까요?
        // 리엑트는 컴포넌트로 구성이 되는데 이 컴포넌트마다 같은 클래스, 같은 아이디를 가질 수 있는 위험이 있기 때문입니다.
        // 실제로 우리가 했었던 모듈 CSS 보면 클래스명이 난수로 자동 생성되어 들어가잖아요? 이거 querySelector로 잡으려면 난감하겠죠?
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>포커스 넣기!</button>
        </div>
    )
}

export default App
