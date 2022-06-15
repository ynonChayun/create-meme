'use strict'
var gElGallery
var gElEditor
var gElCanvas
var gCtx
var imgs
function onInit() {
    gElGallery = document.querySelector('.gallery-container')
    gElEditor = document.querySelector('.editor-contaioner')
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
   
    renderImgs()
}

function renderImgs() {
    imgs = getImgs()
    var strHTML = ''
    imgs.forEach((img) => strHTML += 
    `<img src='${img.url}' onclick="onSetMeme(${img.id})">`)

    document.querySelector('.gallery-imgs').innerHTML = strHTML
}

function renderImg() {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'

    var currImg = getImg()
    var elImg = new Image()
    elImg.src = currImg.url

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function onSetMeme(id) {
    setMeme(id)
    renderImg()
}

function onSetLine(lineContent){
  setLine(lineContent)
}

function renderLine(txt){
    
    gCtx.font = '48px serif';
    gCtx.fillText(txt, 10, 50);
}

function clearCanvas(){
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function renderCanvas(){
    const currMeme = getMeme()
    clearCanvas()

    renderImg()

    renderLine(currMeme.lines[currMeme.selectedLineIdx].txt)
}