'use strict'

const MEMES_KEY = 'memes'
var gMemes = []

function getMemes() {
    gMemes = _loadMemesFromStorage()

    if (!gMemes || !gMemes.length) gMemes = []
    return gMemes
}

function saveMemesToStorage(meme) {
    if (!gMemes.length) {

        gMemes.push({ id: 1, meme })
    }
    else {
        const id = gMemes[gMemes.length - 1].id + 1
        gMemes.push({ id, meme })
    }
    saveToStorage(MEMES_KEY, gMemes)
}

//return memes as array from LS
function _loadMemesFromStorage() {
    return loadFromStorage(MEMES_KEY)
}
