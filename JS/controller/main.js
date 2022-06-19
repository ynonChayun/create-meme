'use strict'

//components
let gElGallery
let gElEditor

//elements
let gElCanvas
let gCtx

let imgs


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




//Response to click on img in gallery
function onSetMeme(id) {
    gElGallery.style.display = 'none'
    gElEditor.style.display = 'flex'
    document.querySelector('.memes-container').style.display = 'none'

    setImg(id)
    renderCanvas()
}

function onCanvasClick({ offsetX, offsetY }) {
    if (isEmpty()) return

    if (checkCircleSize(offsetX, offsetY)) {
        console.log('circle!!!!!!');
        gElCanvas.addEventListener('mousedown', setSizeByCircle)
    }

    else if (checkLine(offsetX, offsetY) || checkSticker(offsetX, offsetY)) {
        _movedLine()
    }

}



/********* respones to FILTER memes **********/

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

function onInputFilter(filterByText) {
    setFilterByText(filterByText)
    renderImgs()
}





/********* respones to EDITOR meme **********/

// switch the focus
function onSwitchLines() {
    if (isEmpty()) return

    switchLines()
    _movedLine()
}

// Response to click on delete
function onDeleteLine() {
    if (isEmpty()) return

    deleteCurrLine()
    _movedLine()
}

// Response to click on font stroke
function onStrokeColor(strokeColor) {
    if (isEmpty() || getCurrLine().isSticker) return
    setStrokeColor(strokeColor)
    renderCanvas()
}

// Response to click on change font
function onSetFont(font) {
    if (isEmpty() || getCurrLine().isSticker) return
    setFont(font)
    renderCanvas()
}

//Response to click on add line button
function onAddLine() {
    setIsEmpty(false)

    addNewLine(gElCanvas.height)

    renderCanvas()
    changeTxtInput()
    renderColors()
}

//Response to click on color input
function onSetColor(color) {

    if (isEmpty() || getCurrLine().isSticker) return

    setColor(color)
    renderCanvas()
}

//Response to click buttons up/down  font size
function onMoveLine(mode) {
    if (isEmpty()) return

    moveLine(mode)
    renderCanvas()
}

// Response to change txt in input
function onChangeContent(lineContent) {
    if (isEmpty() || getCurrLine().isSticker) return
    setTextOnLine(lineContent)
    renderCanvas()
}

//Response to click buttons grow/shrink  font size
function onChangeTextSize(value) {
    if (isEmpty() || getCurrLine().isSticker) return

    setSizeFont(value)
    renderCanvas()
}

//Response to click buttons center/left/right align text
function onAlignText(pos) {
    if (isEmpty()) return

    setAlignText(pos, gElCanvas.width)
    renderCanvas()
}





/********** respones to FILE actions share/save/download meme **********/

// on download click
function onDownloadMeme(elLink) {
    _renderCanvasWitoutBackgrounds()
    downloadMeme(gElCanvas.toDataURL(), elLink)
}

// on share to facebook click
function onShareMeme() {
    _renderCanvasWitoutBackgrounds()
    shareMeme()
}

// on save to memes archive
function onSaveMeme() {
    _renderCanvasWitoutBackgrounds()
    saveMeme(gElCanvas.toDataURL())
}





/********** HELPER functions **********/

function _renderCanvasWitoutBackgrounds() {
    renderImg()
    drawStickers(false)
    renderLines(false)
}


// Works when we need to switch a line
function _movedLine() {

    renderCanvas()
    if (!getCurrLine().isSticker) {
        renderFontInput()
        changeTxtInput()
        renderColors()
    }
}

