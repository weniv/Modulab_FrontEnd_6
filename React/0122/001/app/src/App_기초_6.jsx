import './App.css';

function Button({color, size}){
    console.log(color, size)
    return (
        <button className={`${color} ${size}`}>나는 버튼이다!</button>
    )
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