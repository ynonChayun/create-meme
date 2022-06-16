'use strict'

var gKeywordSearchCountMap = {
    'funny': 0, 'scarry': 0, 'politics': 0, 'emotion': 0, 'food': 0, 'modernisation': 0, 'spider': 0, 'movie': 0
}
var gFilter = ''
const randStrs = ['funny', 'scarry', 'politics', 'emotion', 'food', 'modernisation', 'spider', 'movie']

// { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }

// By click on meme in the gallery
function setImg(id) {
    gMeme.selectedImgId = id
}

//
function createImgs() {
    const imgs = []
    for (var i = 1; i < 19; i++) {
        imgs.push({
            id: i,
            url: `meme-imgs (square)/img-${i}.jpg`,
            keywords: getKeys()
        })
    }
    return imgs
}

function getImg() {
    const id = gMeme.selectedImgId
    return gImgs.filter(meme => meme.id === id)[0]
}

function getImgs() {
    gImgs = createImgs()
    if (gFilter) {
        gImgs = gImgs.filter(img => img.keywords.includes(gFilter))
    }
    return gImgs

}

function getKeysToFilter() {
    return randStrs
}

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getKeys() {
    const keys = []
    for (var i = 0; i < getRandInt(1, 3); i++) {
        keys.push(randStrs[getRandInt(0, randStrs.length - 1)])
    }

    return keys
}

function setFilter(filter) {
    gFilter = filter
    gKeywordSearchCountMap

    for (var key in gKeywordSearchCountMap) {
        if (key === filter) {
            gKeywordSearchCountMap[key]++
        }
    }
    renderFilterWords()
}
function getCurrScore(filter){
    for (var key in gKeywordSearchCountMap) {
        if (key === filter) {
            return gKeywordSearchCountMap[key]
        }
    }
}