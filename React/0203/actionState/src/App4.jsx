import { useState, use, Suspense } from 'react';

function fetchTodo(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos = {
                1: { id: 1, title: '리액트 공부하기', done: false },
                2: { id: 2, title: '운동하기', done: true },
                3: { id: 3, title: '책 읽기', done: false },
            };
            resolve(todos[id]);
        }, 1000);
    });
}

function TodoDetail({ todoPromise }) {
    const todo = use(todoPromise);

    return (
        <div>
            <h3>{todo.title}</h3>
            <p>상태: {todo.done ? '완료' : '미완료'}</p>
        </div>
    )
}

function TodoApp() {
    const [todoPromise, setTodoPromise] = useState(null);

    const handleSelectTodo = (id) => {
        setTodoPromise(fetchTodo(id));
    }

    return (
        <div>
            <h2>할 일 앱</h2>
            <button onClick={() => handleSelectTodo(1)}>할 일 1</button>
            <button onClick={() => handleSelectTodo(2)}>할 일 2</button>
            <button onClick={() => handleSelectTodo(3)}>할 일 3</button>

            {todoPromise && (
                <div>
                    <Suspense fallback={<p>로딩 중...</p>}>
                        {/* <TodoDetail todoPromise={todoPromise} /> */}
                        {(() => {
                            const todo = use(todoPromise);
                            return (
                                <div>
                                    <h3>{todo.title}</h3>
                                    <p>상태: {todo.done ? '완료' : '미완료'}</p>
                                </div>
                            );
                        })()}
                    </Suspense>
                </div>
            )}
        </div>
    );
}

export default TodoApp;