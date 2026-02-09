// overloading(오버로드 시그니처)
function greet(name: string): string;
function greet(age: number): string;
// 구현체
function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old!`;
    }
}

// function greet(name: string): string {
//     return `Hello, ${name}`;
// }

// function greet(age: number): number {
//     return `You are ${value} years old!`;
// }

const result1 = greet("TypeScript");
console.log(result1); // "Hello, TypeScript!"

const result2 = greet(25); 
console.log(result2); // "You are 25 years old!"

// union type
function process(input: string | number): string { 
    if(typeof input === 'string') {
        return 'string';
    } else {
        return 'number';
    }
}

process('ABC');
process(42);

/**
 * 오버로딩의 위쪽 선언들은 TypeScript에게 "이 입력에는 이 출력"이라는 정확한 매핑을 알려주는 역할을 합니다. 
 * 런타임에는 의미가 없지만, 컴파일시 타입 체킹과 IDE 지원에서는 큰 차이를 만듭니다.
 */