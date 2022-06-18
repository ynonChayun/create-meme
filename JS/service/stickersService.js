'use strict'

var gStickers

function setSticker(elImg) {
    const sticker = createSticker(elImg)
    const lines = getMeme().lines
    setIsEmpty(false)
    lines.push(sticker)
    setCurrLine(lines.length - 1)
}

/**** create sticker ****/
function createSticker(elImg) {
    return {
        elImg,
        align: 'center',
        startX: 100,
        startY: 100,
        width: 150,
        height: 150,
        isSticker: true
    }
}

/**** Checks if there is a line accord click on canvas ****/
function checkSticker(offsetX, offsetY) {

    const lineIdx = gMeme.lines.findIndex(line => {
        return (
            offsetX > line.startX && offsetX < line.startX + line.width &&
            offsetY > line.startY && offsetY < line.startY + line.height && line.isSticker
        )
    })
    if (lineIdx !== -1 && lineIdx !== undefined) {
        setCurrLine(lineIdx)
        return true
    }

}
