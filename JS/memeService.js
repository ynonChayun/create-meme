'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }
    ]
}

function getImgs() {
    return createImgs()
}

function createImgs() {
    for (var i = 1; i < 19; i++) {
        gImgs.push({
            id: i,
            url: `meme-imgs (square)/img-${i}.jpg`,
            keywords: ['funny', 'cat']
        })
    }
    return gImgs
}

function getMeme() {
    return gMeme
}

function setMemeById(id) {
    gMeme = getMemeById(id)
}

function getMemeById(id) {
    return gImgs.filter(meme => meme.id === id)[0]
}