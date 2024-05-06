export function setList(container, listText){
    const app = document.getElementById('app')
    app.innerHTML = ''
    const header = document.createElement('h1')
    header.innerText = listText
    header.classList.add('header')
    app.appendChild(header)
    app.appendChild(container)
 }