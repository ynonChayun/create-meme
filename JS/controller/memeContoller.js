'use strict'

//clear the canvas
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

//render the canvas after each change
function renderCanvas() {
    clearCanvas()
    renderImg()
    drawStickers()
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

function renderFontInput() {
    document.querySelector('.font-style').value = getCurrLine().font
}