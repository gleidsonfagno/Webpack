function titleComponente(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Helo, word'
    return elemH1
}

document.body.appendChild(titleComponente())