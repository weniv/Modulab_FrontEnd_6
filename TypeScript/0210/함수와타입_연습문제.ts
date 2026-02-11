/**
 * 1. 
 */
// 1) 두 수의 곱을 반환하는 함수
function multiply(a: number, b: number): number {
    return a * b;
}

// 2) 이름을 받아 인사말을 반환하는 함수
function sayHello(name: string): string {
    return `안녕하세요, ${name}님!`;
}

// 3) 배열의 합계를 반환하는 함수
function sum(numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

/**
 * 3. `format`이라는 함수를 오버로딩으로 작성하세요.

**오버로드 시그니처:**

1. `number`를 받으면 → 천 단위 콤마가 포함된 `string`을 반환 (예: `1000` → `"1,000"`)
2. `string`을 받으면 → 양쪽 공백을 제거한 `string`을 반환 (예: `" hello "` → `"hello"`)
3. `boolean`을 받으면 → `"Yes"` 또는 `"No"` `string`을 반환
 */

// 오버로드 시그니처
function format(value: number): string;
function format(value: string): string;
function format(value: boolean): string;

// 구현체
function format(value: number | string | boolean): string {
    if(typeof value === 'number') {
        return value.toLocaleString();
    } else if(typeof value === 'string') {
        return value.trim();
    } else {
        return value ? "Yes" : "No";
    }
}

// 실행 결과 예시
console.log(format(1234567));       // "1,234,567"
console.log(format("  hello  "));   // "hello"
console.log(format(true));          // "Yes"

/**
 * 4. 
**함수 1 — `getTotalPrice`**

- 장바구니 배열을 받아 **총 금액** (`price × quantity`의 합)을 `number`로 반환

**함수 2 — `getExpensiveItems`**

- 장바구니 배열과 **기준 금액**(선택적, 기본값 `100000`)을 받아, 개별 상품 가격(`price`)이 기준 금액 이상인 아이템의 **이름 배열**(`string[]`)을 반환

**함수 3 — `addItem`**

- 장바구니 배열과 새 아이템을 받아, 아이템을 추가한 **새 배열**을 반환
- 반환 타입은 `CartItem[]`
- 원본 배열은 변경하지 않아야 합니다
 */
type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

const cart: CartItem[] = [
    { name: "키보드", price: 50000, quantity: 1 },
    { name: "마우스", price: 30000, quantity: 2 },
    { name: "모니터", price: 350000, quantity: 1 },
    { name: "USB 케이블", price: 5000, quantity: 3 },
];

function getTotalPrice(cart: CartItem[]): number {
    let totalPrice: number = 0;
    for(let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity
    }
    return totalPrice;
    // return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

function getExpensiveItems(cart: CartItem[], minPrice: number = 100000): string[] {
    return cart.filter((item) => item.price >= minPrice).map((item) => item.name);
}

function addItem(cart: CartItem[], newItem: CartItem): CartItem[] {
    return [...cart, newItem]
}