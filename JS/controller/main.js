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

    gElCanvas = document.querySelector('.main-canvas')
    gCtx = gElCanvas.getContext('2d')

    rendertickers()
    setListeners()
    renderImgs()
    renderCanvas()
    renderMemes()
    renderFilterWords()
}

// Response to change txt in input
function onChangeContent(lineContent) {
    if (isEmpty() || getCurrLine().isSticker) return
    setTextOnLine(lineContent)
    renderCanvas()
}

//Response to click buttons grow/shrink  font size
function onChangeTextSize(mode) {
    if (isEmpty() || getCurrLine().isSticker) return

    setSizeFont(mode)
    renderCanvas()
}

//Response to click buttons center/left/right align text
function onAlignText(pos) {
    if (isEmpty()) return

    setAlignText(pos, gElCanvas.width)
    renderCanvas()
}

//Response to click on img in gallery
function onSetMeme(id) {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'
    document.querySelector('.memes-container').style.display = 'none'

    setImg(id)
    renderCanvas()
}

//Response to click on add line button
function onAddLine() {
    setIsEmpty(false)

    addNewLine(gElCanvas.height)

    renderCanvas()
    clearTxtInput()
    renderColors()
}

//Response to click on color input
function onSetColor(color) {
    console.log(getCurrLine());
    if (isEmpty() || getCurrLine().isSticker) return

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

    if (checkLine(offsetX, offsetY) || checkSticker(offsetX, offsetY)) {
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
    if (!getCurrLine().isSticker) {
        renderFontInput()
        clearTxtInput()
        renderColors()
    }
}


function onStrokeColor(strokeColor) {
    
    if (isEmpty() || getCurrLine().isSticker) return
    setStrokeColor(strokeColor)
    renderCanvas()
}

function onSetFont(font) {
    if (isEmpty() || getCurrLine().isSticker) return
    setFont(font)
    renderCanvas()
}

function onShareMeme() {
    shareMeme()
}


function onOpenMemes(elBtn) {

    toggleActive(elBtn)
    openMemes()
}

function onOpenView(elBtn) {
    toggleActive(elBtn)
    console.log('view');
}


function onSaveMeme() {
    renderCanvasWitoutBackgrounds()
    saveMemesToStorage(gElCanvas.toDataURL())
    renderMemes()
}

function onMoreKeys(elBtn) {
    elBtn.classList.toggle('none-active-more')
    elBtn.classList.toggle('active-more')

    setMoreKeys()
    renderFilterWords()
}

function onSetFilter(key) {
    setFilter(key)
    renderFilterWords()
    renderImgs()
}

function onInputFilter(filterByText){
    setFilterByText(filterByText)
    renderImgs()
}