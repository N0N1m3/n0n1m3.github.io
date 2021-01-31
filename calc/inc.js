const style = document.createElement('link')
style.href = 'calc.css'
style.rel = 'stylesheet'
document.getElementsByTagName('head')[0].appendChild(style);

const script = document.createElement('script')
const bd = document.querySelector('body')
script.src = 'calc.js'
console.log(script)
bd.appendChild(script)
