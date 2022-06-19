'use strict'

function renderLines(withBackground = true) {
    const meme = getMeme()

    meme.lines.forEach((line, index) => {
        if (!line.isSticker) {
            if (index === meme.selectedLineIdx && withBackground) renderLine(line, true)
            else renderLine(line, false)
        }

    })
}

function renderLine(line, isSelected) {
    gCtx.font = line.size + 'px ' + line.font;
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.stroke

    const txt = line.txt

    const x = line.startX
    const y = line.startY

    const width = line.width
    const height = line.height

    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    if (isSelected) {
        renderBackground(x, y, width, height)
    }
}

//render the background hover text
function renderBackground(x, y, width, height) {

    const padd = 12
    gCtx.beginPath();
    gCtx.strokeStyle = "BLACK";
    gCtx.moveTo(x - padd, y + padd);
    gCtx.lineTo(x - padd, y - height - padd);

    gCtx.lineTo(x + width + padd, y - height - padd);
    gCtx.lineTo(x + padd + width, y + padd);

    gCtx.closePath()
    gCtx.stroke()
    gCtx.fillStyle = "#dbe0dd65";
    gCtx.fill()

    gCtx.beginPath()
    gCtx.arc(x + padd + width, y + padd, 7, 0, 2 * Math.PI);
    gCtx.stroke();

    gCtx.fillStyle = "#5F7161";
    gCtx.fill()
}

