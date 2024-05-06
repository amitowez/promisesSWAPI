import { loadDataArr } from '../loadDataArr.js'
import { createCards } from '../createList/createCards.js'
import { fields } from '../consts/fields.js'
import { setList } from '../setList.js'
export async function createCard(data, type){
    setList(false, 'Uploading')
    const categories = await loadData(data, type)
    const categoriesKeys = Object.keys(categories)
    const containers = {}
    categoriesKeys.forEach(category =>{
        containers[category] = createCards(categories[category], category)
    })
    setList(containers, categoriesKeys, true)
}


function loadData(data, type){
    const categories = []
    const names = []
    fields[type].forEach(field => {
        if(typeof field !='string' && data[field.name]){
            names.push(field.name)
            categories.push(loadDataArr(data[field.name]))
        } 
    })

    return Promise.all(categories).then((res) => {
        return setDataName(res, names) 
    })
}

function setDataName(res, names){
    const result = {}
    names.forEach((name, index) => {
        result[name] = res[index]
    })
    return result
}