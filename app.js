import { loadDataArr } from './loadDataArr.js'
import { createFilmCards } from './createList/createFilmCards.js'
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
setList(createFilmCards(loadFilms), 'Films')

console.log(loadFilms)