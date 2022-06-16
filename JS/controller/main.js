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
    setSizeFont(mode)
    renderCanvas()
}

//Response to click buttons center/left/right align text
function onAlignText(pos) {
    setAlignText(pos)
    renderCanvas()
}

//Response to click button baseLine - bottom
function onSetBottomLine() {
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
    const middleCanvas = gElCanvas.height / 2
    addNewLine('left', 10, middleCanvas)

    renderCanvas()
    clearTxtInput()
    renderColorInput()
}

//Response to click on color input
function onSetColor(color) {
    setColor(color)
    renderCanvas()
}

function onMoveLine(mode) {
    moveLine(mode)
    renderCanvas()
}

function onCanvasClick({ offsetX, offsetY }) {

    if (checkLine(offsetX, offsetY)) {
        renderCanvas()
        clearTxtInput()
        renderColorInput()
    }
}

function onSwitchLines() {
    switchLines()
    renderCanvas()
    clearTxtInput()
    renderColorInput()
}

