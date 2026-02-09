/**
 * 1. 다음 조건을 만족하는 인터페이스들을 작성해보세요.
 * BaseItem 인터페이스: id(number), name(string) 속성을 가짐
 * Book 인터페이스: BaseItem을 확장하고 author(string), pages(number) 속성을 추가
 * Movie 인터페이스: BaseItem을 확장하고 director(string), duration(number) 속성을 추가
 */

interface BaseItem {
    id: number,
    name: string,
}

interface Book extends BaseItem {
    author: string,
    pages: number,
}

interface Movie extends BaseItem {
    director: string,
    duration: number,
}

/**
 * 2. 아래 코드가 정상적으로 동작하도록 필요한 인터페이스를 정의해보세요.
 */

interface User {
    firstName: string,
    lastName: string,
    age: number,
    role: string,
}

interface UserDetails {
    displayName: string,
    age: number,
    isAdmin: boolean,
}

function processUser(user: User): UserDetails {
  return {
    displayName: user.firstName + " " + user.lastName,
    age: user.age,
    isAdmin: user.role === "admin"
  };
}
 
const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  role: "admin"
};
 
const details = processUser(user);

/**
 * 3. 다음 코드에서 에러가 발생하는 줄을 모두 찾고, 이유를 설명하세요.
 */
// --- A: interface 병합 ---
interface Box {
    width: number;
}
interface Box {
    height: number;
}
const box: Box = { width: 10, /*height: 20*/ };
 
// --- B: type 재선언 ---
type Circle = {
    radius: number;
};
type Circle = {
    color: string;
};

// type NewType = Circle & Circle_

// --- C: 구조적 타이핑 ---
type Point = { x: number; y: number };
 
function printPoint(p: Point): void {
    console.log(`${p.x}, ${p.y}`);
}
 
const point3D = { x: 1, y: 2, z: 3 };
printPoint(point3D);