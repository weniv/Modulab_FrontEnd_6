function App() {
    const data = [
        {id: 1, name: 'Alice', age: 30, city: 'New York'},
        {id: 2, name: 'Bob', age: 25, city: 'Los Angeles'},
        {id: 3, name: 'Charlie', age: 35, city: 'Chicago'},
    ];
    return (
        <>
            {/* 우리의 목표는 아래와 같이 HTML로 보여지게 만드는 것입니다. 그럼 카드가 총 3개가 될 것입니다. */}
            {/* 데이터를 아래처럼 작성되게 하려 하는데, 30살 이상인 사람만 출력하게 하려면 어떤 방식이 좋을까요? */}
            <div className="card">
                <div>1</div>
                <div>Alice</div>
                <div>30</div>
                <div>New York</div>
            </div>
        </>
    )
}

export default App