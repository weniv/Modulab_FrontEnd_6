function Button({text, color, size, onClick}) {
    return (
        <button className={`${color} ${size}`} onClick={onClick}>{text}</button>
    )
}

function App() {
    return (
        <>
            <Button
                text="로그인"
                color="blue"
                size="large"
                onClick={() => alert('로그인 버튼 클릭!')}
            />
            <Button
                text="취소"
                color="red"
                size="small"
                onClick={() => alert('취소 버튼 클릭!')}
            />
        </>
    );
}

export default App;