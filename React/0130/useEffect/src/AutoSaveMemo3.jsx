function AutoSaveMemo() {
    const [content, setContent] = useState(() => {
        return localStorage.getItem('memo_content') || '';
    });

    const [lastSavedTime, setLastSavedTime] = useState(() => {
        return localStorage.getItem('memo_time') || null;
    });

    const [isSaving, setIsSaving] = useState(false);

    const timerRef = useRef(null);

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    useEffect(() => {
        setIsSaving(true);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            const now = new Date();
            const ampm = now.getHours() >= 12 ? '오후' : '오전';
            const hour = String(now.getHours() % 12 || 12).padStart(2, '0');
            const minute = String(now.getMinutes()).padStart(2, '0');
            const second = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${ampm} ${hour}: ${minute}: ${second}`;

            localStorage.setItem('memo_content', content);
            localStorage.setItem('memo_time', timeString);

            setLastSavedTime(timeString);
            setIsSaving(false);

            console.log('메모가 자동으로 저장되었습니다.');
        }, 500);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [content])

    return (
        <div className="memo-container">
            <h1>자동 저장 메모장</h1>
            <textarea
                value={content}
                onChange={handleChange}
                placeholder="메모를 입력하세요..."
            />
            <div>
                {isSaving ? (<p>저장 중...</p>) : lastSavedTime && <p>마지막 저장: {lastSavedTime}</p>}
            </div>
        </div>
    );
}

export default AutoSaveMemo;