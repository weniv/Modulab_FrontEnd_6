import { useState } from 'react';

function LikeButton() {
    let like = 0;
    
    function handleLike() {
        like += 1;
        console.log('좋아요 수:', like);
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
