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

function renderMeme() {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'

    var meme = getMeme()
    var img = new Image()
    img.src = meme.url

    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function onSetMeme(id) {
    setMemeById(id)
    renderMeme()
}