'use strict'
var gElGallery
var gElEditor
var gElCanvas
var gCtx

function onInit() {
    gElGallery = document.querySelector('.gallery-container')
    gElEditor = document.querySelector('.editor-contaioner')
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

}

function renderMeme(elMeme) {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'

    gCtx.drawImage(elMeme, 0, 0, gElCanvas.width, gElCanvas.height);
}
