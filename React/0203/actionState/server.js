const express = require('express');
const fs = require('fs');

const app = express();
const cors = require('cors');

// app.use(cors({
//     origin: 'https://my-friendly-computer'
// }));

app.use(cors());
app.use(express.json()); // 클라이언트가 보내는 json 데이터를 객체로 파싱


// 클라이언트에서 post 요청이 왔을때 처리하는 로직
app.post('/login', (req, res) => {

    // 클라이언트가 보내는 아이디와 비밀번호 정보
    const { id, password } = req.body;

    // DB 데이터에 접근하기
    try {
        const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

        const users = data.user;

        const foundUser = users.find((user) => user.userName === id && user.password === password);

        if (foundUser) {
            res.json({ success: true, message: '로그인 성공!', user: { id: foundUser.userName } });
        } else {
            res.status(401).json({ success: false, message: '로그인 실패! 아이디 혹은 비밀번호가 일치하지 않습니다!' })
        }

    } catch (error) {
        res.status(500).json({ success: false, message: '서버 내부에 오류가 발생했습니다.' });
    }
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 작동중입니다.');
});
