function App() {
  return (
    <div>
      <h1>인기 상품</h1>
      <div className="product">
        <img src="https://picsum.photos/600/400" alt="상품1" />
        <h2>캣타워</h2>
        <p>가격: 50,000원</p>
        <button>장바구니에 담기</button>
      </div>
      <div className="product">
        <img src="https://picsum.photos/600/400" alt="상품2" />
        <h2>고양이 간식</h2>
        <p>가격: 15,000원</p>
        <button>장바구니에 담기</button>
      </div>
      <div className="product">
        <img src="https://picsum.photos/600/400" alt="상품3" />
        <h2>장난감 쥐</h2>
        <p>가격: 10,000원</p>
        <button>장바구니에 담기</button>
      </div>
    </div>
  );
}

export default App; 