'use strict'

var gIsEmpty = false
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

// { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }
var gImgs
var gMeme = createMeme()
var gCurrLine = gMeme.lines[gMeme.selectedLineIdx]

function getMeme() {
    return gMeme
}

function setSizeFont(mode) {
    if (mode === 'grow' && gCurrLine.size === 100
        || mode === 'shrink' && gCurrLine.size === 26) return

    gCurrLine.size += mode === 'shrink' ? -2 : 2

    gCurrLine.height = gCurrLine.size / 1.6666
    gCurrLine.width = gCtx.measureText(gCurrLine.txt).width + 10

}

function setBottomLine() {
    gCurrLine.haveBottomLine = true
}

function setAlignText(pos) {
    gCurrLine.align = pos

    switch (pos) {
        case 'left':
            gCurrLine.startX = 10
            gCtx.textAlign = 'start'
            break;
        case 'center':
            gCurrLine.startX = gElCanvas.width / 2
            gCtx.textAlign = 'center'
            break;
        case 'right':
            gCurrLine.startX = gElCanvas.width - 10
            gCtx.textAlign = 'end'
            break;
    }

}

function setLine(txt) {
    gCurrLine.txt = txt

    switch (gCurrLine.align) {
        case 'left':
            break;
        case 'center':
            gCurrLine.startX -= (gCurrLine.width - gCtx.measureText(txt).width) / 2

            break;
        case 'right':
            gCurrLine.startX -= gCurrLine.width - gCtx.measureText(txt).width
            break;
    }

    gCurrLine.width = gCtx.measureText(txt).width

}

function createMeme() {
    const bottomCanvas = document.querySelector('canvas').height - 50
    return {
        selectedImgId: 3,
        selectedLineIdx: 1,
        lines: [
            createLine('left', 10, 70),
            createLine('left', 10, bottomCanvas)
        ]
    }
}


// storage helper functions
function _saveMemeToStorage() {
    saveToStorage(key = 'meme', value = gMeme)
}

function _loadMemefromStorage() {
    loadFromStorage(key = 'meme')
}

function isEmpty() {
    return gIsEmpty
}
function setIsEmpty(bool) {
    gIsEmpty = bool
}
