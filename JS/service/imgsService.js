'use strict'



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
            keywords: ['funny', 'cat']
        })
    }
    return imgs
}

function getImg() {
    const id = gMeme.selectedImgId
    return gImgs.filter(meme => meme.id === id)[0]
}


function getImgs() {
    gImgs = loadFromStorage('imgs')
    if (!imgs) gImgs = createImgs()

    return gImgs
}
