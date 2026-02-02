import React, { useState, useCallback } from 'react';

function TodoList() {

    // useMemo(()=> fn, []);
    // useCallback(fn, []);


    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // 할 일 추가 함수
    const handleAddTodo = useCallback(() => {
        console.log(input.trim());
        if (!input.trim()) return;
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now(),
                text: input,
                completed: false,
            },
        ]);
        setInput('');
    }, [input]); // input이 변경될 때만 함수 재생성

    // 할 일 완료 상태 토글 함수
    const handleToggleTodo = useCallback((todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    }, []); // 의존성이 없으므로 함수가 재생성되지 않음

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={handleAddTodo}>추가</button>
            <TodoItems todos={todos} onToggle={handleToggleTodo} />
        </div>
    );
}

const TodoItems = React.memo(({ todos, onToggle }) => {
    console.log('TodoItems 렌더링');
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => onToggle(todo.id)}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
});

export default TodoList;