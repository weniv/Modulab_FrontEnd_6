import { useState } from 'react';

function LikeButton() {
    // let like = 0;
    // 일반적으로 '변수이름'과 'set변수이름'으로 작명합니다.
    const [like, setLike] = useState(0);

    
    function handleLike() {
        setLike(like + 1);
        console.log(like)
    }
    
    return (
        <div>
            <button onClick={handleLike}>{like}</button>
        </div>
    );
}

function App() {

    return (
        <>
            <LikeButton/>
        </>
    )
}

export default App
