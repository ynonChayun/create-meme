'use strict'
var gImgs


function createImgs() {
    const imgs = []
    for (var i = 1; i < 19; i++) {
        imgs.push({
            id: i,
            url: `meme-imgs (square)/img-${i}.jpg`,
            keywords: getKeysToImg()
        })
    }
    return imgs
}

function getImgs() {
    gImgs = createImgs()
    console.log(gImgs);
    if (gFilter) {
        gImgs = gImgs.filter(img => img.keywords.includes(gFilter))
    }
    
    return gImgs
}



function getImg() {
    const memeImgId = getMeme().selectedImgId
    return gImgs.filter(img => img.id === memeImgId)[0]
}

