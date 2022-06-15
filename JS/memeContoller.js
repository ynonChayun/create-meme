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
    console.log('bibi');
    renderImgs()
}

function renderImgs() {
    imgs = getImgs()
    var strHTML = ''
    imgs.forEach(img => strHTML += `<img src=${imgs[i].url} alt="">`)
    document.querySelector('.gallery-imgs').innerHTML = strHTML
}

function renderMeme(elMeme) {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'

    gCtx.drawImage(getMeme(), 0, 0, gElCanvas.width, gElCanvas.height);
}

function onSetMeme(meme) {
    setMeme(meme)
}