import { useState, createContext, useContext } from 'react';

// AI와 함께 학습해보면 좋을 주제
// 1. useState로 전달된 데이터가 여러개일 때 어떻게 전달하는지
// 2. Context를 사용할 때 이름을 어떻게 짓는지
// 3. Context를 사용하는 것과 파일 안에 변수를 생성하여 불러오는 것에 차이점은 무엇인지(예를 들어 value.json 같은 파일을 만들어서 불러오는 것과의 차이점, 이 파일도 어디서나 접근이 가능하기 때문)
// 4. props와 Context, 상태관리 라이브러리(Redux, Recoil 등)의 차이점 요약

// 1. Context 생성
const UserContext = createContext();

// Context 예제
// data를 App -> A -> B -> C로 전달할 때 props 없이 바로 접근

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
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div>
      <h3>B 컴포넌트</h3>
      <p>props 전달 없음!</p>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  // 2. useContext로 데이터 직접 접근
  const user = useContext(UserContext);

  return (
    <div>
      <h4>C 컴포넌트</h4>
      <p>Context로 받은 데이터: {user}</p>
    </div>
  );
}

export default App;