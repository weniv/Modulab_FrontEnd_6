/**
 * 1. 배열의 첫 번째 요소를 반환하는 제네릭 함수 getFirst를 작성하세요. 배열이 비어있으면 undefined를 반환합니다.
 */
// 구현하세요
function getFirst<T>(value: T[]): T | undefined {
  // 여기에 코드 작성
  return value.length > 0 ? value[0] : undefined;
}

// 테스트
const firstNum = getFirst([1, 2, 3]); // 타입: number | undefined
const firstStr = getFirst(['a', 'b']); // 타입: string | undefined

/**
 * 2. API 응답을 표현하는 제네릭 인터페이스 `ApiResponse<T>`를 작성하세요.

- `success`: boolean
- `data`: T 타입 (성공 시)
- `error`: string (실패 시, 선택적)
 */
// 구현하세요
interface ApiResponse<T> {
  // 여기에 코드 작성
  success: boolean,
  data: T,
  error?: string,
}

// 테스트
const userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: 'John' }
};

/**
 * 4.key-value 쌍을 저장하는 제네릭 인터페이스 Pair<K, V>를 작성하세요.
 */
// 구현하세요
interface Pair_<K, V> {
  // 여기에 코드 작성
  key: K,
  value: V,
}

// 테스트
const pair1: Pair_<string, number> = { key: 'age', value: 25 };
const pair2: Pair_<number, string> = { key: 1, value: 'first' };

/**
 * 교안 8-1
 */
function reverseMap<K, V>(map: Map<K, V>): Map<V, K> {
    const reversed = new Map<V, K>();
    map.forEach((value, key) => {
        console.log(`value: ${value}, key: ${key}`);
        reversed.set(value, key);
    });
    return reversed;
}
 
// 테스트
const original = new Map<string, number>([
    ["one", 1],
    ["two", 2],
    ["three", 3]
]);
const reversed = reverseMap(original);
// console.log("reversed: ", reversed);
// console.log(reversed.get(1)); // "one"
// console.log(reversed.get(2)); // "two"
// console.log(reversed.get(3)); // "three"