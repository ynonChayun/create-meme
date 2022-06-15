'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

// { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }
var gImgs = []
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



function setLine(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    renderCanvas()
}














function getMeme(){
    return gMeme
}

function getImg() {
    return getImgById(gMeme.selectedImgId)
}

function setMeme(id) {
    gMeme = {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [{
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'center',
            color: 'black'
        }
        ]
    }
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
function getImgById(id) {
    return gImgs.filter(meme => meme.id === id)[0]
}
function getImgs() {
    return createImgs()
}