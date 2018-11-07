const todos = [{
    text: '1st todo',
    isCompleted: true
}, {
    text: '2nd todo',
    isCompleted: false
}, {
    text: '3rd todo',
    isCompleted: false
}, {
    text: '4th todo',
    isCompleted: true
}];

const filter = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos  = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector('#todos').innerHTML = '';

    filteredTodos.forEach(function(todo) {
        const newTodo = document.createElement('p');
        newTodo.textContent = todo.text;
        document.querySelector('#todos').appendChild(newTodo);
    })
}

renderTodos(todos, filter);

document.querySelector('#filter-todo').addEventListener('input', function(event) {
    filter.searchText = event.target.value;
    renderTodos(todos, filter.searchText);
})

const addNewTodo = function(todos, todoText) {
    const newTodo = {
        text: todoText,
        isCompleted: false
    }
    todos.push(newTodo);
    renderTodos(todos, filter);
}

document.querySelector('#new-todo').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = event.target.elements.newTodo.value;
    addNewTodo(todos, text);
    event.target.elements.newTodo.value = '';
})
