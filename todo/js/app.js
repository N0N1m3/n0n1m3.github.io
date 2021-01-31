const msg = document.querySelector('.add__input'),
    btn = document.querySelector('.add__btn'),
    todo = document.querySelector('.list__ul');

let todoList =[];

if (localStorage.getItem('Todo List')){
    todoList = JSON.parse(localStorage.getItem('Todo List'))
    showMsgs();
}

btn.addEventListener('click', () => {
    if (!msg.value) return;
    let newTodo = {
        "todo": msg.value,
        "checked": false,
        "important": false
    };
    todoList.push(newTodo);
    showMsgs()
    localStorage.setItem('Todo List', JSON.stringify(todoList));
    msg.value = '';
});

function showMsgs (){
    let showMsg = '';
    if(todoList.length === 0) todo.innerHTML = '';
    todoList.forEach(function (item, i) {
        showMsg += `
        <li class='list__li'>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked': ''}>
            <label for='item_${i}' class='${item.important ? 'important': ''}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = showMsg;
    });
};

todo.addEventListener('click', event => {
    let inputId = event.target.getAttribute('id');
    let forLabel = todo.querySelector(`[for=${inputId}]`);
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(item => {
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('Todo List', JSON.stringify(todoList));
        }
    });
})

todo.addEventListener('contextmenu', event => {
    event.preventDefault();
    todoList.forEach(function (item, i) {
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey && event.which == 3){
                todoList.splice(i, 1);
            } else {
                item.important = !item.important;
            }
            showMsgs();
            localStorage.setItem('Todo List', JSON.stringify(todoList));
        }
    });
});