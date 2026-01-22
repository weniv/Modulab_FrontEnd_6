const data = {
    username: 'hojun',
    age: 10,
    height: 200
}

// 이런 식으로 하나씩 변수로 선언하면 비효율적입니다.
// const username = data.username
// console.log(username)

// 그래서 아래와 같은 문법이 나왔습니다.
const {username, age, height} = data