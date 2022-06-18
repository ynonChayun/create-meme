'use strict'

const gStickersContainer = document.querySelector('.stickers-container')
const COUNT_STICKERS = 15
var gPageIdx = 0
const PAGE_SIZE = 4


function onSetSticker(elImg) {
    setSticker(elImg)
    
    renderCanvas()
}

function drawStickers() {
    const lines = getMeme().lines
    if (!lines.length) {
        return
    }

    lines.forEach((line, index) => {
        if (line.isSticker) {
            gCtx.drawImage(line.elImg, line.startX, line.startY, line.width, line.height);
            if (index === getCurrLineIdx()) {
                renderBackground(line.startX, line.startY + line.height, line.width, line.height)
            }
        }
    }
    )
}



/**** paging ****/
function nextPage() {
    gPageIdx++
    if (gPageIdx * PAGE_SIZE >= COUNT_STICKERS) {
        gPageIdx = 0
    }
    rendertickers()
}

function prevPage() {
    if (gPageIdx === 0) return
    rendertickers()
}


function rendertickers() {
    var strHTML = `<span class="arrow-left" onclick= "prevPage()">⪻</span>
    <div class="stickers-content">`

    const startSticker = gPageIdx * PAGE_SIZE
    const endSticker = (gPageIdx + 1) * PAGE_SIZE

    for (var i = startSticker; i < endSticker; i++) {
        strHTML += ` <img src="./imgs/stickers/${i}.png" onclick="onSetSticker(this)"></img>`
    }
    strHTML += `</div>
    <span class="arrow-right" onclick = "nextPage()">⪼</span>`
    gStickersContainer.innerHTML = strHTML
}