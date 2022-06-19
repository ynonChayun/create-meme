'use stricr'

var gStartPos
const gTouchEvents = ['touchstart', 'touchmove', 'touchend']

function setListeners() {
    addMouseListeners()
    addTouchListeners()
    renderCanvas()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {

    gElCanvas.style.cursor = 'grabbing'
    if (checkLine(ev.offsetX, ev.offsetY) ||
        checkSticker(ev.offsetX, ev.offsetY)) {
        gElCanvas.addEventListener('mousemove', onMove)
        gStartPos = getEvPos(ev)
    }

}

function onMove(ev) {
    const currLine = getCurrLine()
    const evPos = getEvPos(ev)

    currLine.startY += evPos.y - gStartPos.y
    currLine.startX += evPos.x - gStartPos.x

    gStartPos = getEvPos(ev)
    renderCanvas()
}

function onUp() {
    gElCanvas.style.cursor = 'grab'
    gElCanvas.removeEventListener("mousemove", onMove);
}

function getEvPos(ev) {
    var position = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvents.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        position = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return position
}






function setSizeByCircle(ev){
    gElCanvas.style.cursor = 'grabbing'
    gElCanvas.addEventListener('mouseup', stopChangeSize)
    gElCanvas.addEventListener('mousemove', changeSizeByMove)
    gStartPos = getEvPos(ev)
}

function stopChangeSize(){
    gElCanvas.style.cursor = 'grab'
    gElCanvas.removeEventListener("mousemove", changeSizeByMove);
    gElCanvas.removeEventListener('mousedown', setSizeByCircle)
}

function changeSizeByMove(ev){
    const currLine = getCurrLine()
    const evPos = getEvPos(ev)

    setSizeFont((evPos.x - gStartPos.x)/6)
    gStartPos = getEvPos(ev)
    renderCanvas()
    
}
