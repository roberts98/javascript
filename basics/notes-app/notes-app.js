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

const newP = document.createElement('p');
newP.textContent = `You have ${todos.length} todos to do`;
document.querySelector('body').appendChild(newP);

todos.forEach(function(todo) {
    const newP = document.createElement('p');
    newP.textContent = todo.text;
    document.querySelector('body').appendChild(newP);
})