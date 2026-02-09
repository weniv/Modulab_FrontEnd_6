type author = {
    name: string;
    email: string;
};
 
type notice = {
    auth: author;
    id: number;
    title: string;
    content?: string;
};
 
const noticeData: notice = {
    auth: {
        name: "licat",
        email: "licat@weniv.co.kr",
    },
    id: 1,
    title: "공지사항",
    content: "안녕하세요. TypeScript 공부중입니다."
};

 
/**
 * 인터섹션 타입 예제 
 */ 
type Student = {
    name: string;
    grade: number;
};
 
type Athlete = {
    sport: string;
    level: number;
};
 
// 학생이면서 운동선수인 타입
type StudentAthlete = Student & Athlete;
 
const kim: StudentAthlete = {
    name: "김철수",    // Student 타입에서 필요
    grade: 3,         // Student 타입에서 필요
    sport: "축구",     // Athlete 타입에서 필요
    level: 5          // Athlete 타입에서 필요
};

/**
 * type - readonly
 */
type Todo = {
    readonly key: string;
    name: string;
};
 
const todo: Todo = {
    key: "1",
    name: "할 일 1"
};
 
// todo.key = "2"; // 에러! 읽기 전용 속성이므로 재할당 불가
todo.name = "할 일 2"; // OK
console.log(todo);

/**
 * type - 타입 호환
 */
type Person = {
    name: string;
    age: number;
};
 
type Developer = {
    name: string;
    age: number;
    skills: string[];
};
 
let person: Person = { name: "김철수", age: 20 };
let developer: Developer = { name: "김영희", age: 25, skills: ["JavaScript", "TypeScript"] };
 
person = developer; // OK
// developer = person; // 에러! 타입 호환 안됨
console.log(person);