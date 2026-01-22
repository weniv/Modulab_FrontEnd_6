function Card({imageUrl, productName, productPrice}) {
    return (
        <div className="product">
            <img src={imageUrl} alt={productName} />
            <h2>{productName}</h2>
            <p>가격: {productPrice}</p>
            <button>장바구니에 담기</button>
        </div>
    )
}

const data = [
    {
        productName: '캣타워', 
        productPrice: 50000, 
        imageUrl: 'https://picsum.photos/600/400'
    },
    {
        productName: '고양이 간식', 
        productPrice: 15000, 
        imageUrl: 'https://picsum.photos/600/400'
    },
    {
        productName: '장난감 쥐', 
        productPrice: 10000, 
        imageUrl: 'https://picsum.photos/600/400'
    },
]


function App() {
    return (
        <>
            <h1>인기 상품</h1>
            {data.map((item, index) => (
                <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                />
            ))}
        </>
    );
}

export default App; 