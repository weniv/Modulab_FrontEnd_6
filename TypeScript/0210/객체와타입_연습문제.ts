/**
 * 3. 아래 요구사항에 맞는 타입과 함수를 작성하세요.

1. `type Status`를 `"pending" | "approved" | "rejected"` 문자열 리터럴 유니온으로 정의하세요.
2. `Status`를 받아 한글 상태명을 반환하는 함수 `getStatusText`를 작성하세요.
 */

type Status = "pending" | "approved" | "rejected";

function getStatusText(status: Status): string {
    if(status === 'pending') {
        return '대기중';
    } else if(status === 'approved') {
        return '승인됨';
    } else {
        return '거절됨';
    }
}

// 실행 결과 예시
// console.log(getStatusText("pending"));   // "대기중"
// console.log(getStatusText("approved"));  // "승인됨"
// console.log(getStatusText("rejected")); // "거절됨"

/**
 * 5.
 * 1. `Author`와 `Post` 타입을 각각 정의하세요.
 * 2. `Post[]`를 받아 특정 태그가 포함된 게시글의 **제목 배열**을 반환하는 함수 `getPostsByTag`를 작성하세요.
 * 3. `Post[]`를 받아 특정 작성자(name 기준)의 **게시글 수**를 반환하는 함수 `countPostsByAuthor`를 작성하세요.
 */

interface Author {
    name: string,
    email: string,
}

interface Post {
    id: number,
    title: string,
    content: string,
    author: Author,
    tags: string[],
}

function getPostsByTag(posts: Post[], tag: string): string[] {
    return posts.filter((post) => post.tags.includes(tag)).map((post) => post.title);
}

function countPostsByAuthor(posts: Post[], authorName: string): number {
    return posts.filter((post) => post.author.name === authorName).length;
}

// 테스트 데이터
const posts: Post[] = [
    { id: 1, title: "TS 입문", content: "...", author: { name: "licat", email: "licat@weniv.co.kr" }, tags: ["typescript", "입문"] },
    { id: 2, title: "JS 기초", content: "...", author: { name: "wade", email: "wade@weniv.co.kr" }, tags: ["javascript", "입문"] },
    { id: 3, title: "TS 심화", content: "...", author: { name: "licat", email: "licat@weniv.co.kr" }, tags: ["typescript", "심화"] },
];

console.log(getPostsByTag(posts, "typescript")); // ["TS 입문", "TS 심화"]
console.log(countPostsByAuthor(posts, "licat")); // 2