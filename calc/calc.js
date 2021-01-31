const output = document.querySelectorAll('.calc')
const root = document.querySelector('.root')
const calc = document.createElement('div')
const div = document.createElement('div')

calc.classList.add('calc')
root.appendChild(calc)
div.classList.add('keyboard')
document.querySelector('.calc').appendChild(div)
div.insertAdjacentHTML('beforeend', `<textarea name="" id="result" readonly></textarea>`)
'( ) CE / 7 8 9 * 4 5 6 - 1 2 3 + C 0 . ='.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
})

const btn = document.querySelectorAll('button')
let txt = document.getElementById('result')

btn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (elem.value === '=') {
            try {
                txt.textContent = math.round(math.evaluate(txt.textContent), 5)
            } catch {
                let oldValue = txt.textContent
                let newValue = 'недопустимое выражение'
                txt.textContent = newValue
                setTimeout(() => {
                    txt.textContent = oldValue
                }, 1500)
            }
            console.log(parseInt(txt.textContent))
        } else if (elem.value === 'C') {
            txt.textContent = ''
        } else if (elem.value === 'CE') {
            txt.textContent = txt.textContent.substring(0, txt.textContent.length - 1)
        } else {
            txt.textContent += elem.value
        }
    })
})