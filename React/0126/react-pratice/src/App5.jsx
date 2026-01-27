import { useState } from "react";

const products = [
    { id: 1, name: "상품 1", price: 10000 },
    { id: 2, name: "상품 2", price: 20000 },
    { id: 3, name: "상품 3", price: 30000 },
];

function ProductCard({ product, onAddToCart }) {
    console.log(product);

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
            <button onClick={() => onAddToCart(product)}>담기</button>
        </div>
    );
}

function CartItem({ item, onIncrease, onDecrease }) {
    return (
        <div>
            <span>{item.name}</span>
            <button onClick={onDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

function PriceDisplay({ totalPrice }) {
    return <div>총 금액: {totalPrice.toLocaleString()}원</div>;
}

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                ),
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleIncrease = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            ),
        );
    };
    const handleDecrease = (id) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>상품 목록</h1>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}

            <h2>장바구니</h2>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                cart.map((item) => <CartItem key={item.id} item={item} onIncrease={() => handleIncrease(item.id)} onDecrease={() => handleDecrease(item.id)} />)
            )}
            <PriceDisplay totalPrice={totalPrice} />
        </div>
    );
}

export default App;
