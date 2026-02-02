import { useState, createContext, useContext } from 'react';

// 문제: 다국어 앱을 만들어주세요.
// 요구사항1: title 컴포넌트는 별도로 만들어주세요.
// 요구사항2: 나머지는 내용 컴포넌트로 만들어주세요.
// UI는 https://www.books.weniv.co.kr/essentials-react/chapter07/07-2 를 참고해주세요.

// Context 생성
const LanguageContext = createContext();

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
    const [lang, setLang] = useState('ko');

    return (
        <LanguageContext.Provider value={languages[lang]}>
        <div>
            <p>언어선택:</p>
            <div>
                <button onClick={()=>setLang('en')}>English</button>
                <button onClick={()=>setLang('ko')}>한국어</button>
                <button onClick={()=>setLang('ja')}>日本語</button>
            </div>
            <Title/>
            <Content/>
        </div>
        </LanguageContext.Provider>
    );
}

function Title() {
    const { title } = useContext(LanguageContext);
    return <h1>{title}</h1>;
}

function Content() {
    const { greeting, description } = useContext(LanguageContext);
    return (
        <div>
            <p>{greeting}</p>
            <p>{description}</p>
        </div>
    );
}

export default App;