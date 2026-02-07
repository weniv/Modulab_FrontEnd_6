/**
 * Array
 */
const numArr: Array<number|string> = [1,2,3];
const numArr2: (number|string)[] = [1,2,'3'];
const numArr3: number[] | string[] = [1, 2, '3']
// numArr의 타입과 numArr2의 타입은 동일합니다. 표현방법만 다를뿐입니다.

numArr.push('2')
numArr.push(4)

/**
 * Tuple
 */
let x: [string, number];
x = ['hello', 10]; // OK

// readonly 튜플 사용
const readonlyTuple: readonly [number, number, string] = [1, 2, 'three'];
readonlyTuple.push('four'); // 에러 발생!