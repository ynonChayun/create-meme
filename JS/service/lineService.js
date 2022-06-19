'use strict'

/**** add new lien ****/
function addNewLine(canvasHeight) {
    const lines = getMeme().lines
    const linesLength = lines.length

    //Check whether the line is first - third
    const startY =
        linesLength === 0 ? 50 :
            linesLength === 1 ? canvasHeight - 50 :
                linesLength === 2 ? canvasHeight / 2 : getCurrLine().startY + 60

    const newLine = createLine('left', 10, startY)

    lines.push(newLine)
    setCurrLine(linesLength)
}

/**** create line ****/
function createLine(align, startX, startY) {

    return {
        txt: 'Type Your Text',
        size: 50,
        align,
        color: '#000000',
        stroke: '#000000',
        startX,
        startY,
        width: 350,
        height: 40,
        font: 'IMPACT',
        isSticker: false
    }
}

/**** update fill ****/
function setColor(color) {
    getCurrLine().color = color
}

/**** Update pos ****/
function moveLine(mode) {
    const currLine = getCurrLine()
    if (mode === 'up' && currLine.startY <= 35 ||
        mode === 'down' && currLine.startY >= gElCanvas.height - 15) return

    currLine.startY += mode === 'up' ? -5 : 5
}

/**** Updates font ****/
function setFont(font) {
    getCurrLine().font = font
}

/**** Updates stroke ****/
function setStrokeColor(color) {
    getCurrLine().stroke = color
}

/**** Switch the focus ****/
function switchLines() {
    const linesLength = getMeme().lines.length
    const selectedLineIdx = getCurrLineIdx()

    // checking if thre is only one line
    if (linesLength === 1) return

    //Checking if I'm on last line
    if (selectedLineIdx + 1 === linesLength) setCurrLine(0)
    else setCurrLine(selectedLineIdx + 1)
}

/**** Delete the selected line ****/
function deleteCurrLine() {
    const lines = getMeme().lines
    lines.splice(getCurrLineIdx(), 1)

    if (!lines.length) {
        setIsEmpty(true)
        return
    }
    setCurrLine(lines.length - 1)
}

/**** Checks if there is a line accord click on canvas ****/
function checkLine(offsetX, offsetY) {

    const lineIdx = gMeme.lines.findIndex(line => {
        return (
            offsetX > line.startX && offsetX < line.startX + line.width &&
            offsetY > line.startY - line.height && offsetY < line.startY + 5 && !line.isSticker
        )
    })
    if (lineIdx !== -1 && lineIdx !== undefined) {
        setCurrLine(lineIdx)
        return true
    }

}

/**** set text on line ****/
function setTextOnLine(txt) {
    gCurrLine.txt = txt
    gCurrLine.width = getTextWidth(txt)

    if (getTextWidth(txt) + gCurrLine.startX >= gElCanvas.width - 10) {

        var words = txt.split(" ");
        if (words.length === 1) {
            addNewLine(gElCanvas.height)
            document.querySelector('.input-text-line').value = ''
            changeTxtInput()
        } else {
            const lastWord = words[words.length - 1];
            gCurrLine.txt = words.slice(0, words.length - 1).join(' ')
            addNewLine(gElCanvas.height)
            getCurrLine().txt = lastWord
            document.querySelector('.input-text-line').value = lastWord
        }

    }
}


function checkCircleSize(offsetX, offsetY) {
    console.log(offsetX, offsetY);
    let lineIdx = -1
    gMeme.lines.forEach((line, index) => {

        if (!line.isSticker) {
            if (offsetX > line.startX + line.width + 5 && offsetX < line.startX + line.width + 17 &&
                offsetY > line.startY + 5 && offsetY < line.startY + 20
            ) lineIdx = index
        }
        else if (offsetX > line.startX + line.width + 5 && offsetX < line.startX + line.width + 17 &&
            offsetY > line.startY + line.height + 5 && offsetY < line.startY + line.height + 20) lineIdx = index

    })
    
    if (lineIdx !== -1 && lineIdx !== undefined) {
        return true
    }


}