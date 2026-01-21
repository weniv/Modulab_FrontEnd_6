function App() {
    // 제품 이름, 가격, 썸네일 이미지를 화면에 표시해주세요.
    // 재고가 없다면 화면에 표시하지 말아 주세요.
    // 만약 가격이 10000원 이상이라면, 글자색을 red로 표시해주세요.
    // filter도 좋지만 가능하면 3항연산자를 활용해주세요! 실무에서 사용 빈도가 정말 높습니다.
    const data = [
        {id: 1, productName: 'keyring', price: 5000, inStock: true, thumbnailImg: 'https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/1/thumbnailImg.jpg'},
        {id: 2, productName: 'Sticker Pack', price: 3000, inStock: false, thumbnailImg: 'https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/2/thumbnailImg.jpg'},
        {id: 3, productName: 'Blanket', price: 20000, inStock: true, thumbnailImg: 'https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/3/thumbnailImg.jpg'},
    ];
    return (
        <>
            {/* {data.map(product => (
                product.inStock ? 
                <div key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.productName}</div>
                    {product.price >= 10000 ? 
                        <div className="red">{product.price}</div> : <div>{product.price}</div>}
                    <img src={product.thumbnailImg} alt="" />
                </div>: null
            ))} */}
            {data.map(product => (
                // 여기는 왜 {}를 안쓰고 바로 product.inStock를 쓸 수 있었을까요?
                // 그 이유는 이 영역이 이미 자바스크립트에 영역이기 때문입니다.
                product.inStock ? 
                <div key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.productName}</div>
                    {/* 여기서는 왜 product.price 앞에 {}를 써야만 동작할까요? 여러분 주석에서 보시는 것처럼 이 영역은 순수한 자바스크립트 영역이 아닙니다. 이 영역은 JSX 영역입니다. */}
                    {product.price >= 10000 ? 
                        <div className="red">{product.price}</div> : <div>{product.price}</div>}
                    <img src={product.thumbnailImg} alt="" />
                </div>: null
            ))}
        </>
    )
}

export default App