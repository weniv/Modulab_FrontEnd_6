import { useState, createContext, useContext } from 'react';

// 문제: 다국어 앱을 만들어주세요.
// 요구사항1: title 컴포넌트는 별도로 만들어주세요.
// 요구사항2: 나머지는 내용 컴포넌트로 만들어주세요.
// UI는 https://www.books.weniv.co.kr/essentials-react/chapter07/07-2 를 참고해주세요.

// Context 생성
const UserContext = createContext();

const languages = {
  en: {
    title: 'Multi-language App',
    greeting: 'Hello, welcome to our app!',
    description: 'This app supports multiple languages.',
    languageSelector: 'Select Language:',
  },
  ko: {
    title: '다국어 앱',
    greeting: '안녕하세요, 우리 앱에 오신 것을 환영합니다!',
    description: '이 앱은 여러 언어를 지원합니다.',
    languageSelector: '언어 선택:',
  },
  ja: {
    title: '多言語アプリ',
    greeting: 'こんにちは、私たちのアプリへようこそ！',
    description: 'このアプリは複数の言語をサポートしています。',
    languageSelector: '言語を選択：',
  },
};


function App() {
  const [user, setUser] = useState('이호준');

    return (
        <UserContext.Provider value={user}>
        <div>
            <h1>Context 예제</h1>
            <p>App에서 생성한 데이터: {user}</p>
            <ComponentA />
        </div>
        </UserContext.Provider>
    );
}

function ComponentA() {
    return (
        <div>
        <h2>A 컴포넌트</h2>
        <p>props 전달 없음!</p>
        </div>
    );
}

export default App;