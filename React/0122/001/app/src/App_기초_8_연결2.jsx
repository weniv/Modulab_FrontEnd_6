function Button({color}){
    // 3항 연산자로 변환
    return color == 'red' ? (
        <button>나는 빨간 버튼이다!</button>
    ) : (
        <button>나는 초록 버튼이다!</button>
    )
}

function App() {
    return (
        <>
            {/* red */}
            <Button 
                color={'red'}
            />
            {/* green */}
            <Button
                color={'green'}
            />
        </>
    );
}

export default App;