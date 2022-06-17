'use strict'


//render imgs on open page
function renderImgs() {
    imgs = getImgs()

    var strHTML = ''
    imgs.forEach((img) => strHTML +=
        `<img src='${img.url}' onclick="onSetMeme(${img.id})">`)

    document.querySelector('.gallery-imgs').innerHTML = strHTML
}

//render image on canvas 
function renderImg() {
    var currImg = getImg()
    var elImg = new Image()

    elImg.src = currImg.url

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
