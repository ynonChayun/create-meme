'use strict'

//check if the meme is empty
let gIsEmpty = false

let gMeme = createMeme()
let gCurrLine = gMeme.lines[gMeme.selectedLineIdx]

/**** return meme ****/
function getMeme() {
    return gMeme
}

/**** create meme ****/
function createMeme() {
    const bottomCanvas = document.querySelector('.main-canvas').height - 50
    return {
        selectedImgId: 3,
        selectedLineIdx: 1,
        lines: [
            createLine('left', 10, 70),
            createLine('left', 10, bottomCanvas)
        ],

    }
}

/**** set img on canvas ****/
function setImg(id) {
    gMeme.selectedImgId = id
}

/**** Updates the size according clickIng grow/shrink btn ****/
function setSizeFont(value) {
    if (value > 0 && gCurrLine.size === 100
        || value < 0 && gCurrLine.size === 26) return

    gCurrLine.size += value

    //calculation the height according the font-size
    const metrics = gCtx.measureText(gCurrLine.txt);
    const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    gCurrLine.height = height

    // //calculation the font-width with padding
    gCurrLine.width = gCtx.measureText(gCurrLine.txt).width + 10
}

/**** Updates the align according clickIng align btns ****/
function setAlignText(pos, canvasWitdh) {
    gCurrLine.align = pos
    const middleCanvas = canvasWitdh / 2
    const isSticker = getCurrLine().isSticker
    switch (pos) {
        case 'left':
            gCurrLine.startX = isSticker ? -10 : 10
            break;
        case 'center':
            gCurrLine.startX = isSticker ? middleCanvas - 80 : middleCanvas
            break;
        case 'right':
            gCurrLine.startX = isSticker ? canvasWitdh - 150 : canvasWitdh - gCurrLine.width
            break;
    }
}


/**** Helpers functions ****/
function getCurrLine() {
    return gCurrLine
}

function setCurrLine(index) {
    gMeme.selectedLineIdx = index
    gCurrLine = gMeme.lines[index]
}

function getCurrLineIdx() {
    return gMeme.selectedLineIdx
}

function getLengthLines() {
    return gMeme.lines.length
}

function getCurrWidth() {
    return gCurrLine.width
}

function isEmpty() {
    return gIsEmpty
}

function setIsEmpty(bool) {
    gIsEmpty = bool
}

