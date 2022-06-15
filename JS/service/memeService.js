'use strict'


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
            console.log(gCurrLine.startX);
            break;
        case 'right':
            gCurrLine.startX -= gCurrLine.width - gCtx.measureText(txt).width
            break;
    }

    gCurrLine.width = gCtx.measureText(txt).width

}

function getImg() {
    return getImgById(gMeme.selectedImgId)
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function createImgs() {
    const imgs = []
    for (var i = 1; i < 19; i++) {
        imgs.push({
            id: i,
            url: `meme-imgs (square)/img-${i}.jpg`,
            keywords: ['funny', 'cat']
        })
    }
    return imgs
}

function getImgById(id) {
    return gImgs.filter(meme => meme.id === id)[0]
}

function createMeme() {
    return {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Type Your Text',
            size: 50,
            align: 'left',
            color: 'black',
            haveBottomLine: false,
            startX: 10,
            startY: 50,
            width: 460,
            height: 30,
        }
        ]
    }
}

function getImgs() {
    gImgs = loadFromStorage('imgs')
    if (!imgs) gImgs = createImgs()

    return gImgs
}

function _saveMemeToStorage() {
    saveToStorage(key = 'meme', value = gMeme)
}

function _loadMemefromStorage() {
    loadFromStorage(key = 'meme')
}
