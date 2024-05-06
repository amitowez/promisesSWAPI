import { createList } from '../createUtils/createList.js';
import { createCard } from '../createFullCard/createCard.js'
import { fields } from '../consts/fields.js'
export function createCards(data, type){
    console.log(data)
    const container = createList() 
    if(!data) return container
    data.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card-mini')
        card.style.cursor = 'pointer'
        card.onclick = () => {
            console.log(item, type)
            createCard(item, type)
        }
        const field = fields[type]

        field.forEach(fieldItem =>{
            const line = document.createElement('div')
            line.classList.add('cenried')
            if(item[fieldItem.name] || item[fieldItem]){
                line.innerHTML = `
                    <p>${fieldItem.name || fieldItem}:</p> <p>${typeof fieldItem =='string' ? item[fieldItem] : item[fieldItem.name].length}</p>
                `
                card.appendChild(line)
            }

        })
        container.appendChild(card)
    });
    return container
}