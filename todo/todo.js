const btnSub = document.querySelector('.btnSub');
const todo = document.querySelector('.todo');
const headerText = document.querySelector('.headerText');
const mainText = document.querySelector('.mainText');

let keys = Object.keys(localStorage);
let createUl = document.createElement('ul')
createUl.classList = 'sd'
todo.appendChild(createUl)
let allLi = ''
let todos;
const ul = document.querySelector('.sd');

function localSt (){
    todos = ul.innerHTML
    localStorage.setItem('todos', todos)
}

if (localStorage.getItem('todos')) {
    ul.innerHTML = localStorage.getItem('todos')
}

upLi()

btnSub.addEventListener('click', () => {
    if (headerText.value !== '' & mainText.value !== ''){
        let li = document.createElement('li')
        let pH = document.createElement('p')
        let pM = document.createElement('p')
        pH.classList = 'pHeader'
        pM.classList = 'pMain'
        pH.textContent = headerText.value
        pM.textContent = mainText.value
        let y = getRandomInt(1, 9999999999999999)
        pH.setAttribute('item-pH', `${y}`);
        pM.setAttribute('item-pM', `${y}`);
        li.appendChild(pH)
        li.appendChild(pM)
        li.setAttribute('item', `${y}`);
        li.classList = 'tdli'
        ul.appendChild(li)
        upLi()
        localSt()
    }
});

function upLi (){
    allLi = document.querySelectorAll('li')
    allLi.forEach(elem => {
        elem.addEventListener('dblclick', () => {
            elem.remove()
            localSt()
        })
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
