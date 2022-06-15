'use strict'

function renderLines() {
    const meme = getMeme()
    var isSelected = false
    meme.lines.forEach((line, index) => {
        if (index === meme.selectedLineIdx) isSelected = true
        renderLine(line, isSelected)
    })
}

function renderLine(line, isSelected) {

    gCtx.font = line.size + 'px ' + 'serif';
    gCtx.fillStyle = line.color

    const txt = line.txt

    const x = line.startX
    const y = line.startY

    const width = line.width
    const height = line.height
    console.log(height);

    if (line.haveBottomLine) {
        renderBaseLine(x, y + 6, width)
    }
    gCtx.fillText(txt, x, y);
    if (isSelected) {
        renderBackground(x, y, width, height)
    }
}

//render the background hover text
function renderBackground(x, y, width, height) {
    const padd = 8
    gCtx.beginPath();
    gCtx.strokeStyle = "BLACK";
    gCtx.moveTo(x - padd, y + padd);
    gCtx.lineTo(x - padd, y - height - padd);
    gCtx.lineTo(x + width + padd, y - height - padd);
    gCtx.lineTo(x + padd + width, y + padd);
    gCtx.closePath()
    gCtx.stroke()



    gCtx.stroke();
    gCtx.fillStyle = "#dbe0dd65";
    gCtx.fill()
}


//render base line
function renderBaseLine(x, y, width) {
    gCtx.beginPath();
    gCtx.strokeStyle = "BLACK";
    gCtx.moveTo(x, y);
    gCtx.lineTo(x + width, y);
    gCtx.stroke()
}











   // const lines = []

    // if(gCtx.measureText(txt).width + x >= gElCanvas.width - 40){
    //     lines.push()
    // }
