import { useState } from 'react';

// 샘플 데이터
const sampleData = [
  { id: 1, name: '사과', value: 3000 },
  { id: 2, name: '바나나', value: 1500 },
  { id: 3, name: '오렌지', value: 2000 },
  { id: 4, name: '포도', value: 5000 },
  { id: 5, name: '딸기', value: 4000 },
];

// 필터: 2000원 이상만
const priceFilter = (item) => item.value >= 2000;

// 정렬: 가격 오름차순
const priceSort = (a, b) => a.value - b.value;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Lazy Initialize 실습</h1>
      
      <button onClick={() => setCount(count + 1)}>
        리렌더링 트리거 (count: {count})
      </button>
      
      <p>버튼을 클릭하고 콘솔을 확인하세요!</p>
      
      <DataGrid 
        initialData={sampleData} 
        filters={[priceFilter]} 
        sortOrder={priceSort} 
      />
    </div>
  );
}

function DataGrid({ initialData, filters, sortOrder }) {
  const [processedData, setProcessedData] = useState(() => {
    console.log('🔥 초기 데이터 처리 실행!');
    
    let data = [...initialData];

    // 필터 적용
    if (filters && filters.length > 0) {
      data = data.filter((item) => filters.every((f) => f(item)));
      console.log('필터 적용 완료');
    }

    // 정렬 적용
    if (sortOrder) {
      data.sort((a, b) => sortOrder(a, b));
      console.log('정렬 적용 완료');
    }

    return data;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.value}원</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;