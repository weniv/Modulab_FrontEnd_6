// Todo 클래스 만들기
// 일의 내용, 일의 상태 두 가지 프로퍼티를 가진다.
// changeState 메서드를 가진다. 상태 값을 변경한다.

// TodoManager 클래스 만들기: 할일의 목록을 관리합니다.
// addItem 메서드: 할일을 저장한다.
// getItems 메서드: 할일의 목록을 보여준다.
// getLeftTodoCount 메서드 : 남은 할일의 갯수를 반환한다.

class Todo {
    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    changeState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item, finished = false) {
        const todo = new Todo(item, finished);
        this.todoList.push(todo);
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        // return this.todoList.reduce((total, current) =>
        //     // if (current.finished === false) {
        //     //     return ++total;
        //     // } else {
        //     //     return total;
        //     // }
        //     current.finished === false ? ++total : total
        //     , 0);

        const result = this.todoList.filter((current) => {
            return current.finished === false
        });

        return result.length;
    }
}