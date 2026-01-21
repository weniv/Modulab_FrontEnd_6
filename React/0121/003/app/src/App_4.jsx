import './App.css';

function App() {
    // 1. class를 넣어서 살짝 꾸며주세요.
    // 2. 이미지도 나오게 해주세요.
    // 3. key도 넣어주세요.
    // 4. onsale이 true인 상품만 나오게 해주세요. 앞에서 배운 3학 연산자를 활용해보세요!
    const data = [
        {
            "id": 1,
            "productName": "keyring",
            "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/1/thumbnailImg.jpg",
            "onsale": true
        }, {
            "id": 2,
            "productName": "Sticker Pack",
            "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/2/thumbnailImg.jpg",
            "onsale": true
        }, {
            "id": 3,
            "productName": "Blanket",
            "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/3/thumbnailImg.jpg",
            "onsale": false
        }
    ];
    return (
        <div className="cardBox">
            {data.map((item) => (
                item.onsale ?
                <div className="card" key={item.id}>
                    <h2 className="cardName">{item.productName}</h2>
                    <img className="cardImg" src={item.thumbnailImg} alt={item.productName} />
                </div> : null
            ))}
        </div>
    )
}

export default App
