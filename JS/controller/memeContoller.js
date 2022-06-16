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

//clear the canvas
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

//render the canvas after each change
function renderCanvas() {
    clearCanvas()
    renderImg()

    renderLines()
}

//Clear the text input while adding a line
function clearTxtInput() {
    document.querySelector('.input-text-line').value = ''
}

//Renders the current color on color input
function renderColors() {
    document.querySelector('.input-color').value = getCurrLine().color
    document.querySelector('.input-stroke').value = getCurrLine().stroke
}

function renderFontInput(){
    document.querySelector('.font-style').value = getCurrLine().font
}