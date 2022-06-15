function onAlignText(pos) {
    setAlignText(pos)
    renderCanvas()
}


function renderLine(txt) {
    const currMeme = getMeme()
    var currLine = currMeme.lines[currMeme.selectedLineIdx]
   
    gCtx.font = currLine.size + 'px ' + 'serif';

    switch (currLine.align) {
        case 'left':
            var x = 10
            var y = 50
            break;
        case 'center':
            // gElCanvas.width, gElCanvas.height
             x = gElCanvas.width / 2 - 30
             y = gElCanvas.height / 2 
            break;
        case 'right':
            x = gElCanvas.width -10
            y = gElCanvas.height -50
            break;
    }
    if(gCtx.measureText(txt).width >= gElCanvas.width - 40){
        txt += '\n'
        console.log(txt);
    }
    
    gCtx.fillText(txt, x, y);
}
