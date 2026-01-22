function Button({color, customfunction}){
    customfunction();
    return (
        <button>hello world!</button>
    )
}

function App() {

    function hojun(){
        console.log('hojun!!');
    }

    return (
        <>
            <Button 
                color={'red'}
                customfunction={hojun}
            />
        </>
    );
}

export default App;