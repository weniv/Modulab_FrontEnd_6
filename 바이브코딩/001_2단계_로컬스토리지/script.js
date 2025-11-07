// DOM 요소
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const clearCompleted = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');
const currentDateEl = document.getElementById('currentDate');

// 상태
let todos = [];
let currentFilter = 'all';

// 초기화
init();

function init() {
    loadTodos();
    displayDate();
    renderTodos();
    attachEventListeners();
}

// 날짜 표시
function displayDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDateEl.textContent = now.toLocaleDateString('ko-KR', options);
}

// 이벤트 리스너
function attachEventListeners() {
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    clearCompleted.addEventListener('click', clearCompletedTodos);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setFilter(e.target.dataset.filter);
        });
    });
}

// 로컬스토리지에서 할 일 불러오기
function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        try {
            todos = JSON.parse(stored);
        } catch (e) {
            todos = [];
        }
    }
}

// 로컬스토리지에 할 일 저장
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 할 일 추가
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(todo);
    saveTodos();
    renderTodos();
    todoInput.value = '';
    todoInput.focus();
}

// 할 일 토글
function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
}

// 할 일 삭제
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// 완료된 할 일 모두 삭제
function clearCompletedTodos() {
    const completedCount = todos.filter(todo => todo.completed).length;

    if (completedCount === 0) {
        alert('완료된 할 일이 없습니다.');
        return;
    }

    if (confirm(`완료된 ${completedCount}개의 할 일을 삭제하시겠습니까?`)) {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
    }
}

// 필터 설정
function setFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderTodos();
}

// 필터링된 할 일 가져오기
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// 할 일 렌더링
function renderTodos() {
    const filteredTodos = getFilteredTodos();

    // 빈 상태
    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <p>${getEmptyMessage()}</p>
            </div>
        `;
    } else {
        todoList.innerHTML = filteredTodos.map(todo => `
            <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <input
                    type="checkbox"
                    class="todo-checkbox"
                    ${todo.completed ? 'checked' : ''}
                    onchange="toggleTodo(${todo.id})"
                >
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">삭제</button>
            </li>
        `).join('');
    }

    updateTodoCount();
}

// 빈 상태 메시지
function getEmptyMessage() {
    switch (currentFilter) {
        case 'active':
            return '진행 중인 할 일이 없습니다.';
        case 'completed':
            return '완료된 할 일이 없습니다.';
        default:
            return '할 일을 추가해보세요!';
    }
}

// 할 일 개수 업데이트
function updateTodoCount() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    todoCount.textContent = `할 일 ${activeCount}개`;
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
