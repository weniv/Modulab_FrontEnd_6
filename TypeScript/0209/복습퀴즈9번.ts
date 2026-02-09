// **9번**
// 다음 요구사항을 만족하는 함수를 작성하세요.

// - 함수명: `formatUser`
// - 매개변수: `name`(문자열, 필수), `age`(숫자, 선택)
// - 반환: `{ name: string, age?: number }` 형태의 객체
type Formatter = { name: string, age?: number }

function formatUser(name: string, age?: number): Formatter {
    return { name, age }
}