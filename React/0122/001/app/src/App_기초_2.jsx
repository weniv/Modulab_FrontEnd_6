function Button(props){
    // 마치 아래처럼 들어가게 된 것입니다!
    // const props = {
    //     color: 'red'
    // }
    console.log(props)
    return (
        <button>나는 버튼이다!</button>
    )
}

function App() {
    return (
        <>
            {/* red */}
            <Button color={'red'}/>
            {/* green */}
            <Button/>
            {/* blue */}
            <Button/>
        </>
    );
}

export default App;