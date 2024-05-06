import { loadDataArr } from './loadDataArr.js'
import { createCards } from './createList/createCards.js'
import { setList } from './setList.js'
let loadFilms = null;
async function getFilms(){
    if(loadFilms) return loadFilms;
    const filmsUrl = []
    for(let i = 1; i <= 6; i++){
        filmsUrl.push(`https://swapi.dev/api/films/${i}/`)
    }
    loadFilms = await loadDataArr(filmsUrl)
    return loadFilms
}

await getFilms()
setList(createCards(loadFilms,'films'), 'Films')


