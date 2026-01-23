
function App() {

    const handleFunction = () => {
        alert('버튼이 클릭되었습니다!')
    }

    return (
        <>
            <button onClick={handleFunction}>클릭하세요!</button>
        </>
    )
}

export default App
