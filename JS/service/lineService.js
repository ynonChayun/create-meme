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

function addNewLine(align, x, y) {
    gMeme.selectedLineIdx++
    console.log(gCurrLine);
    if (gMeme.selectedLineIdx == 2) {
        var newLine = createLine(align, x, y)
    }
    else {
        var newLine = createLine(align, x, gCurrLine.startY + 60)
    }
    gMeme.lines.push(newLine)
    gCurrLine = newLine
}

function createLine(align = 'left ', startX, startY) {

    return {
        txt: 'Type Your Text',
        size: 50,
        align,
        color: 'black',
        haveBottomLine: false,
        startX,
        startY,
        width: 460,
        height: 40,
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
    console.log(gMeme.selectedLineIdx);
    console.log(gMeme.lines.length);
    if (gMeme.selectedLineIdx + 1 === gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    }else{
        gMeme.selectedLineIdx++
    }
    console.log(gMeme.selectedLineIdx);
    setCurrLine(gMeme.selectedLineIdx)
}