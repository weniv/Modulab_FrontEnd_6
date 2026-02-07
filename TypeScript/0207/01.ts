// 장바구니 항목의 타입을 정의
interface CartItem {
  name: string;
  price: number;
}
 
// items가 CartItem 배열임을 명시
// 이 함수가 반환하는 값이 number임을 명시
function calculateTotal(items: CartItem[]): number {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}
 
const cart = [
  { name: '사과', price: 1000 },
  { name: '바나나', price: '2000' }, // 에러: 'string' 형식은 'number' 형식에 할당할 수 없습니다.
];
 
console.log(calculateTotal(cart));