// onChange 예제
// onChange는 검색에서 검색 키워드가 한 글자씩 입력될 때마다 결과를 출력해주고 싶을 때 많이 사용합니다.
// 우리가 원하는 액션: 검색 창에서 '리'라고 쓰면 1번, 2번, 4번 책이 보이고, '리액트'라고 쓰면 1번, 2번, 4번 책이 보이고, '리액트의'라고 쓰면 1번 책만 보이도록 만들어 봅시다.

import { useState } from 'react';
// 랜더링이 다시 되어야 하기 때문에 useState가 필요합니다!

function App() {
    const books = [
        { id: 1, title: '리액트의 이해', author: '홍길동' },
        { id: 2, title: '리액트를 다루는 기술', author: '김철수' },
        { id: 3, title: 'HTML과 CSS', author: '이영희' },
        { id: 4, title: '리액트 입문', author: '박민수' },
        { id: 5, title: '프론트엔드 개발', author: '최지은' },
    ];

    // 어떻게 렌더링 되는 시점을 잡을 것인가?
    // books라는 데이터를 useState로 잡을 필요가 있나요? 없습니다.
    // 다시 랜더링 되어야 하는 것들을 체크해서, 그 값들을 useState로 만들 필요가 있습니다.
    // 아래처럼 books를 복사한 filteredBooks라는 변수를 만들어서 앞으로 검색된 데이터가 이 데이터에서 변하게 할것입니다. 그러면 이 변수가 변할 때마다 다시 랜더링이 될 것입니다.
    const [filteredBooks, setFilteredBooks] = useState(books);

    return (
        <>
            <h1>도서 검색</h1>
            <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                onChange={(e) => {
                    const keyword = e.target.value;
                    const results = books.filter(book => 
                        book.title.includes(keyword)
                    );
                    // filteredBooks 데이터를 filter된 데이터로 변경합니다!
                    setFilteredBooks(results);
                }} 
            />
            <ul>
                {/* filteredBooks 데이터가 변하면 다시 랜더링 하는 공간입니다. */}
                {filteredBooks.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.author}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
