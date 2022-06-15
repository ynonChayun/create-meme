'use strict'


function getCurrLine(){
    return gCurrLine
}

function setCurrLine(index){
    gCurrLine = gMeme.lines[index]
}

function getCurrWidth(){
    return gCurrLine.width
}

function addLine(){
    const newLine = createLine()
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx++
    gCurrLine = newLine
}

function createLine(){
    return{
        txt: 'Type Your Text',
        size: 50,
        align: 'left',
        color: 'black',
        haveBottomLine: false,
        startX: 10,
        startY: gCurrLine.startY + 60,
        width: 460,
        height : 40,
    }
}