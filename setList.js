export function setList(container, listText, multi){
    const app = document.getElementById('app')
    app.innerHTML = ''
    if(!multi && container){
        addHeader(listText)
        app.appendChild(container)
    } else if(multi && container){
        listText.forEach(categorie => {
            addHeader(categorie)
            app.appendChild(container[categorie])
        });
    } else {
        addHeader(listText)
    }

}

function addHeader(text){
    const header = document.createElement('h1')
    header.innerText = text
    header.classList.add('header')
    app.appendChild(header)
}