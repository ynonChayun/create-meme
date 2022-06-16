'use strict'
function openMemes(){
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.editor-contaioner').style.display = 'none'
    document.querySelector('.memes-container').style.display = 'block'
}

function onSaveMeme() {
    saveMemeToLoaclStorage()
    renderMemes()
}

function renderMemes() {
    const memesBoard = document.querySelector('.memes-imgs')
    
    var strHTML = ''

    const memes = getMemes()
    if(!memes)return

    memes.forEach((meme, index) => {
        strHTML += `<img class="img-${index}" src="${meme}"> </img>`
    });
  
    memesBoard.innerHTML = strHTML
}

