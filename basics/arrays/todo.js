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

// const deleteTodo = function(todos, todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase();
//     })
//     if (index > -1) {
//         todos.splice(index, 1);
//     }
// };

// deleteTodo(todos, '3rd todo');

// const getThingsToDo = function(todos) {
//     return todos.filter(function(todo) {
//         if (!todo.isCompleted) {
//             return true;
//         }
//     })
// };
// console.log(getThingsToDo(todos));

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.isCompleted && b.isCompleted) {
            return -1;
        } else if (a.isCompleted && !b.isCompleted) {
            return 1;
        } else {
            return 0;
        }
    })
};
sortTodos(todos);
console.log(todos);

