function Button({color}){
    console.log(color)
    return (
        <button className={color}>나는 버튼이다!</button>
    )
}

function App() {
    return (
        <>
            {/* red */}
            <Button color={'red'}/>
            {/* green */}
            <Button color={'green'}/>
            {/* blue */}
            <Button color={'blue'}/>
        </>
    );
}

export default App;