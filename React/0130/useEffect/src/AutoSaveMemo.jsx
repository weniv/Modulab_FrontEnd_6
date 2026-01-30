import React, { useRef, useState, useEffect } from 'react';

function AutoSaveMemo() {
    const [content, setContent] = useState(localStorage.getItem('memo') || '');
    const [lastSavedTime, setLastSavedTime] = useState(localStorage.getItem('time') || null);
    const timerRef = useRef(null);

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    useEffect(() => {

        timerRef.current = setTimeout(() => {

        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, []);

    return (
        <div className="memo-container">
            <h1>자동 저장 메모장</h1>
            <textarea
                value={content}
                onChange={handleChange}
                placeholder="메모를 입력하세요..."
            />
            {lastSavedTime && <p>마지막 저장: {lastSavedTime}</p>}
        </div>
    );
}

export default AutoSaveMemo;