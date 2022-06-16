'use strict'

//components
var gElGallery
var gElEditor

//elements
var gElCanvas
var gCtx

var imgs

// Response to on load page
function onInit() {
    gElGallery = document.querySelector('.gallery-container')
    gElEditor = document.querySelector('.editor-contaioner')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')



    renderImgs()
    renderCanvas()

}

// Response to change txt in input
function onChangeContent(lineContent) {
    setLine(lineContent)
    renderCanvas()
}

//Response to click buttons grow/shrink  font size
function onChangeTextSize(mode) {
    if (isEmpty()) return

    setSizeFont(mode)
    renderCanvas()
}

//Response to click buttons center/left/right align text
function onAlignText(pos) {
    if (isEmpty()) return

    setAlignText(pos)
    renderCanvas()
}

//Response to click button baseLine - bottom
function onSetBottomLine() {
    if (isEmpty()) return

    setBottomLine()
    renderCanvas()
}

//Response to click on img in gallery
function onSetMeme(id) {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'

    setImg(id)
    renderCanvas()
}

//Response to click on add line button
function onAddLine() {
    setIsEmpty(false)

    addNewLine()

    renderCanvas()
    clearTxtInput()
    renderColors()
}

//Response to click on color input
function onSetColor(color) {
    if (isEmpty()) return

    setColor(color)
    renderCanvas()
}

function onMoveLine(mode) {
    if (isEmpty()) return

    moveLine(mode)
    renderCanvas()
}

function onCanvasClick({ offsetX, offsetY }) {
    if (isEmpty()) return

    if (checkLine(offsetX, offsetY)) {
        movedLine()
    }
}

function onSwitchLines() {
    if (isEmpty()) return

    switchLines()
    movedLine()
}

function onDeleteLine() {
    if (isEmpty()) return

    deleteCurrLine()
    movedLine()
}

function movedLine() {

    renderCanvas()
    renderFontInput()
    clearTxtInput()
    renderColors()
}


function onStrokeColor(strokeColor) {
    setStrokeColor(strokeColor)
    renderCanvas()
}


function onSetFont(font) {
    setFont(font)
    renderCanvas()
}


function setGallery(elBtn) {
    const elGallery = document.querySelector('.gallery-container')
    if (elGallery.style.display === 'block') return

    elGallery.style.display = 'block'
    document.querySelector('.editor-contaioner').style.display = 'none'
    console.log(elBtn);
    elBtn.classList.toggle('active')
}
