import { useState } from 'react';

// AI를 통해서 다양한 답변을 얻어보고, 비교해보고, 주석을 통해서 이해할 수 있도록 해주세요.
// 가능하면 여러분들에게 맞는 답변은 손으로 한번 써보시는 것을 권해드립니다.
// 1. useState를 사용하지 않았습니다. 이것을 useState를 사용하도록 변경해보세요.
// 2. 수량을 증가시키는 버튼과 감소시키는 버튼을 추가해보세요.
// 3. 각 상품의 합계 금액(가격 * 수량)을 표시해보세요.
// 4. 모든 상품의 총합 금액을 표시해보세요. 수량이 변했을 때 렌더링이 되는 것을 고려해야 합니다.

function Card({key, name, price, count}) {
    return (
        <div key={key}>
            <h2>{name}</h2>
            <p>가격: {price}원</p>
            <button>+</button>
            <p>수량: {count}개</p>
            <button>-</button>
            <p>합계: {price * count}원</p>
        </div>
    )
}

// 구매 상품 데이터
const data = [
    { id: 1, name: '아이폰 14', price: 1200000, count: 2 },
    { id: 2, name: '에어팟 프로', price: 300000, count: 1 },
    { id: 3, name: '맥북 프로', price: 2400000, count: 1 },
]

function App() {

    return (
        <>
            {data.map(item => (
                <Card 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />
            ))}
            <div>
                Total: 00원
            </div>
        </>
    )
}

export default App
