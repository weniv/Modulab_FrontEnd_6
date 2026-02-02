import { useState } from 'react';

// props drilling 예제
// data를 App -> A -> B -> C로 전달하는 과정

function App() {
  const [user, setUser] = useState('이호준');

  return (
    <div>
      <h1>Props Drilling 예제</h1>
      <p>App에서 생성한 데이터: {user}</p>
      <ComponentA user={user} />
    </div>
  );
}

function ComponentA({ user }) {
  return (
    <div>
      <h2>A 컴포넌트</h2>
      <p>A가 받은 데이터: {user}</p>
      <ComponentB user={user} />
    </div>
  );
}

function ComponentB({ user }) {
  return (
    <div>
      <h3>B 컴포넌트</h3>
      <p>B가 받은 데이터: {user}</p>
      <ComponentC user={user} />
    </div>
  );
}

function ComponentC({ user }) {
  return (
    <div>
      <h4>C 컴포넌트</h4>
      <p>C가 받은 데이터: {user}</p>
    </div>
  );
}

export default App;