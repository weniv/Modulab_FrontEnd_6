const userAges = new Map<string, number>();
 
userAges.set("licat", 3);      // OK
userAges.set("mura", 5);       // OK
// userAges.set("binky", "세살"); // 에러! number 타입이어야 함`
// userAges.set(123, 10);         // 에러! 키는 string 타입이어야 함

const scores = new Map<string, number>();

// set(key, value): 값 추가/수정
scores.set("국어", 90);
scores.set("영어", 85);
scores.set("수학", 95);

console.log("scores1: ", scores.size);

// get(key): 값 조회 - 반환 타입은 V | undefined
const mathScore = scores.get("수학");  // number | undefined
console.log(mathScore); // 95

// has(key): 키 존재 여부 확인
console.log(scores.has("국어")); // true
console.log(scores.has("과학")); // false

console.log(scores.has("영어")); // true

// delete(key): 값 삭제
scores.delete("영어");

// size: 크기
console.log(scores.size); // 2
console.log(scores.has("영어")); // false

// clear(): 전체 삭제
scores.clear();
console.log("scores2: ", scores.size)