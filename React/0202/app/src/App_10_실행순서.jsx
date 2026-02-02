import React, { useEffect, useLayoutEffect, useState } from 'react';
 
function HookFlow() {
  const [count, setCount] = useState(0);
 
  const onClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
 
  useLayoutEffect(() => {
    console.log('LayoutEffect 1: 마운트 시 브라우저에 그려주기 전 실행');
    return () => {
      console.log('LayoutEffect Cleanup 1: 언마운트 시 실행');
    };
  }, []);
 
  useLayoutEffect(() => {
    console.log(
      'LayoutEffect 2: 마운트/업데이트 시마다 브라우저에 그려주기 전 실행',
    );
    return () => {
      console.log(
        'LayoutEffect Cleanup 2: 업데이트 직전 또는 언마운트 시 실행',
      );
    };
  });
 
  useLayoutEffect(() => {
    console.log(
      'LayoutEffect 3: 마운트 시 또는 num 변경으로 업데이트 시 브라우저에 그려주기 전 실행',
    );
    return () => {
      console.log(
        'LayoutEffect Cleanup 3: num 변경으로 인한 업데이트 직전 또는 언마운트 시 실행',
      );
    };
  }, [count]);
 
  // useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.
 
  useEffect(() => {
    console.log('Effect 1: 마운트 시 브라우저에 그려진 후 실행');
    return () => {
      console.log('Effect Cleanup 1: 언마운트 시 실행');
    };
  }, []);
 
  useEffect(() => {
    console.log('Effect 2: 마운트/업데이트 시마다 브라우저에 그려진 후 실행');
    return () => {
      console.log('Effect Cleanup 2: 업데이트 직전 또는 언마운트 시 실행');
    };
  });
 
  useEffect(() => {
    console.log(
      'Effect 3: 마운트 시 또는 num 변경으로 업데이트 시 브라우저에 그려진 후 실행',
    );
    return () => {
      console.log(
        'Effect Cleanup 3: num 변경으로 인한 업데이트 직전 또는 언마운트 시 실행',
      );
    };
  }, [count]);
 
  return <button onClick={onClick}>{count}</button>;
}
 
function App() {
  const [isVisible, setIsVisible] = useState(true);
 
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
 
  return (
    <div style={{ margin: '20px' }}>
      <button onClick={handleClick}>
        {isVisible ? '언마운트시키기' : '마운트시키기'}
      </button>
      <br />
      {isVisible && <HookFlow />}
    </div>
  );
}
 
export default App;