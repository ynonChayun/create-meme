'use strict'

const MEMES_KEY = 'memes'
var gMemes = []

function getMemes() {
    gMemes = _loadMemesFromStorage()

    if (!gMemes || !gMemes.length) gMemes = []
    return gMemes
}

function saveMemesToStorage(meme) {
    gMemes.push(meme)
   
    saveToStorage(MEMES_KEY, gMemes)
}

//return memes as array from LS
function _loadMemesFromStorage() {
    return loadFromStorage(MEMES_KEY)
}
