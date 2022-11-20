import './style.scss'

function titleComponente(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Helo, word'
    elemH1.classList.add('title')
    return elemH1
}

document.body.appendChild(titleComponente())