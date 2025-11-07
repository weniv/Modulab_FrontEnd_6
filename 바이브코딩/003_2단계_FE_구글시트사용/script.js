// 전역 변수
let API_URL = '';
let todos = [];
let currentFilter = 'all';

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadConfig();
});

// 설정 저장
function saveConfig() {
    const url = document.getElementById('apiUrl').value.trim();

    if (!url) {
        showError('URL을 입력해주세요.');
        return;
    }

    localStorage.setItem('googleSheetsApiUrl', url);
    API_URL = url;

    document.getElementById('configSection').style.display = 'none';
    document.getElementById('todoSection').style.display = 'block';

    loadTodos();
}

// 설정 불러오기
function loadConfig() {
    const savedUrl = localStorage.getItem('googleSheetsApiUrl');

    if (savedUrl) {
        API_URL = savedUrl;
        document.getElementById('apiUrl').value = savedUrl;
        document.getElementById('configSection').style.display = 'none';
        document.getElementById('todoSection').style.display = 'block';
        loadTodos();
    } else {
        document.getElementById('configSection').style.display = 'block';
        document.getElementById('todoSection').style.display = 'none';
    }
}

// TODO 목록 불러오기
async function loadTodos() {
    showLoading(true);
    hideError();

    try {
        const response = await fetch(`${API_URL}?action=getTodos`);
        const data = await response.json();

        if (data.status === 'success') {
            todos = data.data || [];
            renderTodos();
        } else {
            showError(data.message || '데이터를 불러오는데 실패했습니다.');
        }
    } catch (error) {
        showError('서버와 통신할 수 없습니다. URL을 확인해주세요.');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

// TODO 추가
async function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (!text) {
        showError('할 일을 입력해주세요.');
        return;
    }

    showLoading(true);
    hideError();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'addTodo',
                text: text
            })
        });

        const data = await response.json();

        if (data.status === 'success') {
            input.value = '';
            await loadTodos();
        } else {
            showError(data.message || 'TODO 추가에 실패했습니다.');
        }
    } catch (error) {
        showError('서버와 통신할 수 없습니다.');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

// TODO 완료/미완료 토글
async function toggleTodo(id) {
    showLoading(true);
    hideError();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'toggleTodo',
                id: id
            })
        });

        const data = await response.json();

        if (data.status === 'success') {
            await loadTodos();
        } else {
            showError(data.message || 'TODO 업데이트에 실패했습니다.');
        }
    } catch (error) {
        showError('서버와 통신할 수 없습니다.');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

// TODO 삭제
async function deleteTodo(id) {
    if (!confirm('정말 삭제하시겠습니까?')) {
        return;
    }

    showLoading(true);
    hideError();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'deleteTodo',
                id: id
            })
        });

        const data = await response.json();

        if (data.status === 'success') {
            await loadTodos();
        } else {
            showError(data.message || 'TODO 삭제에 실패했습니다.');
        }
    } catch (error) {
        showError('서버와 통신할 수 없습니다.');
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

// TODO 목록 렌더링
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    let filteredTodos = todos;

    if (currentFilter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<li style="text-align: center; padding: 40px; color: #888;">할 일이 없습니다.</li>';
        updateStats();
        return;
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const date = new Date(todo.createdAt);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo('${todo.id}')">
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <span class="todo-date">${formattedDate}</span>
            <button class="todo-delete" onclick="deleteTodo('${todo.id}')">삭제</button>
        `;

        todoList.appendChild(li);
    });

    updateStats();
}

// 통계 업데이트
function updateStats() {
    const total = todos.length;
    const active = todos.filter(todo => !todo.completed).length;
    const completed = todos.filter(todo => todo.completed).length;

    document.getElementById('stats').textContent = `총 ${total}개 | 진행중 ${active}개 | 완료 ${completed}개`;
}

// 필터 적용
function filterTodos(filter) {
    currentFilter = filter;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderTodos();
}

// Enter 키 처리
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

// 로딩 표시
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.add('show');
    } else {
        loading.classList.remove('show');
    }
}

// 에러 표시
function showError(message) {
    const error = document.getElementById('error');
    error.textContent = message;
    error.classList.add('show');

    setTimeout(() => {
        hideError();
    }, 5000);
}

// 에러 숨기기
function hideError() {
    const error = document.getElementById('error');
    error.classList.remove('show');
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
