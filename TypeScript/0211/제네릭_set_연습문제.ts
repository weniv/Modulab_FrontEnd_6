/**
 * A-1
 * 1. `printLength<T>` 함수를 만드세요.
    - `T`는 반드시 `{ length: number }` 구조를 가져야 합니다. (`extends` 사용)
    - `"(값)의 길이는 (length)입니다"` 문자열을 반환
 */
function printLength<T extends { length: number }>(value: T): string {
    return `${value}의 길이는 ${value.length}입니다.`
}

console.log(printLength("hello"));       // ?
console.log(printLength([1, 2, 3]));     // ?
console.log(printLength({ length: 10 })); // ?
// console.log(printLength(123));            // ?

/**
 * B-1
 * 제네릭 함수 `removeDuplicates<T>`를 작성하세요.

- `T[]` 배열을 받아 `Set`을 활용하여 중복을 제거한 `T[]`를 반환합니다.
 */
function removeDuplicates<T>(arr: T[]): T[] {
    const newSet: Set<T> = new Set(arr);
    return [...newSet];
}

/**
 * B-3
 * 두 배열의 **교집합**과 **합집합**을 `Set`으로 구하는 제네릭 함수를 작성하세요.

1. `intersection<T>(a: T[], b: T[]): T[]` — 양쪽 모두에 있는 요소
2. `union<T>(a: T[], b: T[]): T[]` — 양쪽 합친 뒤 중복 제거
 */
function intersection<T>(a: T[], b: T[]): T[] {
    const setB: Set<T> = new Set(b);
    return a.filter((item) => setB.has(item))
}

function union<T>(a: T[], b: T[]): T[] {
    const set: Set<T> = new Set([...a, ...b]);
    return [ ...set ];
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

console.log(union([1, 2, 3], [3, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(intersection(["a", "b", "c"], ["b", "c", "d"]));
// ["b", "c"]