import { useState } from "react";

function App() {
    const [userId, setUserId] = useState("");

    const isValidId = (id) => {
        // 조건 1: 6자 이상
        if (id.length < 6) return false;

        // 조건 2 & 3: 영어 소문자, 숫자만 (공백 자동 차단)
        const regex = /^[a-z0-9]+$/;
        if (!regex.test(id)) return false;

        return true;
    };

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    return (
        <>
            <h2>회원가입</h2>

            <input
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={handleChange}
            />

            {userId.length > 0 && (
                <p>
                    {isValidId(userId)
                        ? "생성할 수 있는 아이디 입니다."
                        : "생성할 수 없는 아이디 입니다."}
                </p>
            )}

            <p>아이디 생성 조건</p>
            <ul>
                <li>조건 1: 아이디는 6자 이상이어야 합니다.</li>
                <li>조건 2: 아이디는 영어 소문자, 숫자만 사용할 수 있습니다.</li>
                <li>조건 3: 아이디는 공백이 포함될 수 없습니다.</li>
            </ul>
        </>
    );
}

export default App;