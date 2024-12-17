function addTodo() {
    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() === '') {
        alert('فیلد را پر کنید');
        return;
    }
    let li = document.createElement('li');
    li.textContent = todoInput.value;
    let deleteButton = document.createElement('button');
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };
    todoList.appendChild(li);
    todoInput.value = '';

    audio.play();
}

