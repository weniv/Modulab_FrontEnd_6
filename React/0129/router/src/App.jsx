import React, { useState, useEffect } from 'react';

function PostForm() {
    const [content, setContent] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [warningMessage, setWarningMessage] = useState('');
    const maxLength = 150; // 최대 글자 수

    // 여기에 코드를 작성하세요
    // 1. 글자 수 계산과 경고 메시지 표시를 위한 useEffect
    // 2. 임시저장을 위한 useEffect

    useEffect(() => {
        const savedData = localStorage.getItem('currentContent');
        if (savedData) {
            const { currentContent } = JSON.parse(savedData);
            setContent(currentContent);
        }
    }, []);

    useEffect(
        () => {
            const length = content.length;
            setCharCount(length);

            if (length === 0) {
                setWarningMessage('내용을 입력해주세요');
            } else if (length >= maxLength) {
                setWarningMessage('최대 글자 수 입니다')
            } else {
                setWarningMessage('')
            }

            if (length === 0) {
                localStorage.removeItem('currentContent');
            } else {
                localStorage.setItem('currentContent', JSON.stringify({ currentContent: content }));
            }
        }, [content]
    )


    // useEffect(
    //     () => {

    //     }, [content]
    // )

    return (
        <div className="post-form">
            <h2>게시글 작성하기</h2>
            <div className="textarea-wrapper">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="오늘 어떤 일이 있었나요?"
                    maxLength={maxLength}
                />
                <div className="char-count">
                    {charCount}/{maxLength}
                </div>
            </div>
            {warningMessage && <p className="warning">{warningMessage}</p>}
            <button disabled={charCount === 0 || charCount > maxLength}>
                게시하기
            </button>
        </div>
    );
}

export default function App() {
    return <PostForm />;
}