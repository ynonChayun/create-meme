'use strict'

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}


function loadMemesFromStorage(){
    const val =JSON.parse(localStorage.getItem('memes')) 
    return val
}

function saveMemeToLoaclStorage(){
    const key = 'memes'
    const data = gElCanvas.toDataURL()
    gMemes.push(data)
    console.log(gMemes);
    const val = JSON.stringify(gMemes)
    localStorage.setItem(key, val);
}
