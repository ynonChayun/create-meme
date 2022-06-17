'use strict'


function renderFilterWords() {
    const keys = getKeysToFilter()
    var strHTML = ''
    keys.forEach(key => {
        strHTML+= `<button onclick="onSetFilter('${key}')" data-key="${key}" 
        style="font-size:${getCurrScore(key) + 20}px;">${key}</button>`
    })
    document.querySelector('.filter-words').innerHTML = strHTML
}
