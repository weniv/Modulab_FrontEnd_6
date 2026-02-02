import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ margin: '10px' }}>
      <button onClick={() => setShow(!show)}>
        타이머 {show ? '숨기기' : '보이기'}
      </button>
      {show && <Timer />}
    </div>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
      console.log('타이머 실행 중...');
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>타이머: {count}초</h1>;
}

export default App;