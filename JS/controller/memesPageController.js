'use strict'

function renderMemes() {
    const memesBoard = document.querySelector('.memes-imgs')
    
    var strHTML = ''

    const memes = getMemes()
    if(!memes || !memes.length)return

    memes.forEach((meme, index) => {
        strHTML += `<img class="img-${index}" src="${meme}"> </img>`
    });
  
    memesBoard.innerHTML = strHTML
}

