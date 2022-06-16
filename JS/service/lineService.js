'use strict'


function getCurrLine() {
    return gCurrLine
}

function setCurrLine(index) {
    gCurrLine = gMeme.lines[index]
}

function getCurrWidth() {
    return gCurrLine.width
}

function addNewLine() {
    const canvasHeight = document.querySelector('.main-canvas').height

    if (gMeme.lines.length === 0) {
        var newLine = createLine('left', 10, 50)
    }
    else if (gMeme.lines.length === 1) {
        newLine = createLine('left', 10, canvasHeight - 50)
    }
    else if (gMeme.lines.length === 2) {
        newLine = createLine('left', 10, canvasHeight / 2)
    }
    else {
        newLine = createLine('left', 10, gCurrLine.startY + 60)
    }

    gMeme.lines.push(newLine)
    gCurrLine = newLine
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function createLine(align = 'left ', startX, startY) {

    return {
        txt: 'Type Your Text',
        size: 50,
        align,
        color: '#000000',
        stroke: '#000000',
        haveBottomLine: false,
        startX,
        startY,
        width: 350,
        height: 40,
        font: 'IMPACT'
    }
}

function setColor(color) {
    gCurrLine.color = color
}

function moveLine(mode) {
    if (mode === 'up' && gCurrLine.startY <= 35 ||
        mode === 'down' && gCurrLine.startY >= gElCanvas.height - 15) return

    gCurrLine.startY += mode === 'up' ? -4 : 4
}

function checkLine(offsetX, offsetY) {
    const lineIdx = gMeme.lines.findIndex(line => {

        return (
            offsetX > line.startX && offsetX < line.startX + line.width &&
            offsetY > line.startY - line.height && offsetY < line.startY + 5
        )
    })

    if (lineIdx !== -1 && lineIdx !== undefined) {
        setCurrLine(lineIdx)
        gMeme.selectedLineIdx = lineIdx
    }
    return true
}

function switchLines() {
    if (gMeme.selectedLineIdx + 1 === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
    setCurrLine(gMeme.selectedLineIdx)
}

function deleteCurrLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)

    if (!gMeme.lines.length) {
        setIsEmpty(true)

        return
    }

    gMeme.selectedLineIdx = gMeme.lines.length - 1
    setCurrLine(gMeme.selectedLineIdx)
}

function setStrokeColor(color) {
    gCurrLine.stroke = color
}

function setFont(font) {
    gCurrLine.font = font
}