import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(1000);
    }
  }, [value]);

  return (
    <div style={{ margin: '10px' }}>
      <h1>깜빡거리는 현상이 보이시나요?</h1>
      <p>{value}</p>
    </div>
  );
}

export default App;