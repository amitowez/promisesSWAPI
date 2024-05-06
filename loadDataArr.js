function loadPrommise(url){
    return fetch(url).then(res=> res.json())
}

export function loadDataArr(urls){
    const promises = []
    urls.forEach( url => {
        promises.push(loadPrommise(url))
    });
    return Promise.all(promises).then((arr) => {
        return arr
    })
}

