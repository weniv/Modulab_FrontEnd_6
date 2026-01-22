function Button({color}){
    // 2. 그렇기 때문에 전달된 props가 객체이기 때문에
    // 구조분해할당을 통해 color 값을 바로 꺼내쓸 수 있는 것입니다.
    // const {color} = props 이렇게 된 것과 같은 것이죠! 
    console.log(color)
    return (
        <button>나는 버튼이다!</button>
    )
}

function App() {
    return (
        <>
            {/* red */}
            {/* 
                1.
                이것은 마치
                const props = {
                    color: 'red'
                }
                Button(props)
                와 같은 의미입니다.
            */}
            <Button color={'red'}/>

            {/* green */}
            <Button/>
            {/* blue */}
            <Button/>
        </>
    );
}

export default App;