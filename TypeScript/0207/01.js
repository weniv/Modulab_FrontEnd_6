// items가 CartItem 배열임을 명시
// 이 함수가 반환하는 값이 number임을 명시
function calculateTotal(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price;
    }
    return total;
}
var cart = [
    { name: '사과', price: 1000 },
    { name: '바나나', price: '2000' }, // 에러: 'string' 형식은 'number' 형식에 할당할 수 없습니다.
];
console.log(calculateTotal(cart));
