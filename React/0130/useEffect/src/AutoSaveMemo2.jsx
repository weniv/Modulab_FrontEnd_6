import React, { useRef, useState, useEffect } from 'react';

function AutoSaveMemo() {
    const [content, setContent] = useState('');
    const [lastSaved, setLastSaved] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const savedContent = localStorage.getItem('memo-content');
        const savedTime = localStorage.getItem('memo-last-saved');

        if (savedContent) {
            setContent(savedContent);
        }
        if (savedTime) {
            setLastSaved(savedTime);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    }, []);

    const formatTime = () => {
        // const now = new Date();
        // const hours = String(now.getHours()).padStart(2, '0');
        // const minutes = String(now.getMinutes()).padStart(2, '0');
        // return `${hours}:${minutes}`;
        const now = new Date();
        const ampm = now.getHours() >= 12 ? '오후' : '오전';
        const hour = String(now.getHours() % 12 || 12).padStart(2, '0');
        // now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${ampm} ${hour}: ${minute}: ${second}`;

        return timeString;
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setContent(value);
        setIsSaving(true);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            const currentTime = formatTime();

            localStorage.setItem('memo-content', value);
            localStorage.setItem('memo-last-saved', currentTime);

            setLastSaved(currentTime);
            setIsSaving(false);
        }, 1000);
    };

    return (
        <div className="memo-container">
            <h1>자동 저장 메모장</h1>
            <textarea
                value={content}
                ref={timerRef}
                onChange={handleChange}
                placeholder="메모를 입력하세요..."
            />
            {isSaving ? (<p>저장중...</p>) : (lastSaved && <p>마지막 저장: {lastSaved}</p>)}
        </div>
    );
};

export default AutoSaveMemo;