function App() {
    // 아래 data가 fetch로 가져온 데이터라고 생각을 해주셔야 합니다.
    const data = [100, 200, 300];
    return (
        <>
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </>
    )
}

export default App
