import './App.css';

function Button({color}){
    // 이건 기억하지 않으셔도 됩니다.
    // 이렇게도 구현이 가능하다는 것을 보여드리기 위한 예제입니다.
    // 이것과 이 다음 예제는 연결이 됩니다!
    if (color == 'red') {
        return (
            <button>나는 빨간 버튼이다!</button>
        )
    } else if (color == 'green') {
        return (
            <button>나는 초록 버튼이다!</button>
        )
    } else if (color == 'blue') {
        return (
            <button>나는 파란 버튼이다!</button>
        )
    }
}

function App() {
    return (
        <>
            {/* red */}
            <Button 
                color={'red'}
                size={'large'}
            />
            {/* green */}
            <Button
                color={'green'}
                size={'small'}
            />
            {/* blue */}
            <Button 
                color={'blue'}
                size={'medium'}
            />
        </>
    );
}

export default App;