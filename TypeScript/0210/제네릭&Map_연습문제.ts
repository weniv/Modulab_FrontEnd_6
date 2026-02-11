/**
 * A-1.
 */
// 1) 값을 그대로 반환하는 함수
function identity(value: T): T {
    return value;
}

// 2) 배열의 첫 번째 요소를 반환하는 함수
function getFirst(arr: T[]): T {
    return arr[0];
}

// 3) 값을 배열로 감싸서 반환하는 함수
function toArray(value: T): T[] {
    return [value];
}

/**
 * A-2
 * 1. 두 값을 묶어서 `{ first, second }` 객체로 반환하는 함수 `makePair`를 작성하세요.
    - 타입 매개변수 2개: `<T, U>`
    2. `Pair<T, U>` 타입도 별도로 정의하세요.
 */
type Pair<T, U> = {
    first: T,
    second: U,
}

function makePair<T, U>(first: T, second: U): Pair<T, U> {
    return {
        first: first,
        second: second,
    }
}

const p1 = makePair("이름", 100);       // Pair<string, number>
const p2 = makePair(true, [1, 2, 3]);   // Pair<boolean, number[]>
const p3 = makePair("a", "b");          // Pair<string, string>

// console.log(p1.first);   // "이름"
// console.log(p1);
// console.log(p2.second);
// console.log(p3.first);
// console.log(p1.second);  // 100

/**
 * B-2
 * `Map`을 활용하여 간단한 저장소 함수들을 작성하세요.

1. `createStore<T>()` — 빈 `Map<string, T>`를 반환
2. `setItem<T>(store: Map<string, T>, key: string, value: T): void` — 값 저장
3. `getItem<T>(store: Map<string, T>, key: string): T | undefined` — 값 조회
 */
function createStore<T>(): Map<string, T> {
    return new Map<string, T>();
}

function setItem<T>(store: Map<string, T>, key: string, value: T): void {
    store.set(key, value);
}

function getItem<T>(store: Map<string, T>, key: string): T | undefined {
    return store.get(key);
}

const numStore = createStore<number>();
setItem(numStore, "score", 95);
setItem(numStore, "level", 3);
console.log(getItem(numStore, "score")); // 95
console.log(getItem(numStore, "hp"));    // undefined

const strStore = createStore<string>();
setItem(strStore, "name", "licat");
console.log(getItem(strStore, "name"));  // "licat"
console.log(getItem(strStore, "age")); // undefined