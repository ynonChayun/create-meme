'use strict'

function renderMemes() {

    const memesBoard = document.querySelector('.memes-imgs')

    var strHTML = ''

    const memes = getMemes()

    if (!memes) return
    else if (!memes.length) {
        memesBoard.innerHTML = ''
    }
    else{
        memes.forEach((meme, index) => {
            strHTML += `<div class ="meme-container">
        <div class ="meme-buttons">

        <button class="remove-meme">
        <i class="material-icons" onclick="onDeleteSavedMeme(${meme.id})">delete</i></button>

        <a href="#" download="" onclick="onDownloadSavedMeme(this ,'${meme.meme}')">
        <button class="download-meme"><i class="material-icons">file_download</i></button>
         </a></div>

        <img class="meme-img img-${index}" src="${meme.meme}"> 
        </img>
        </div>`
        });

    memesBoard.innerHTML = strHTML
    }
     
}

function onDeleteSavedMeme(id) {
    const memes = _loadMemesFromStorage()
    var currMemeIdx
    memes.forEach((meme, index) => {
        if (meme.id === id) {
            currMemeIdx = index
        }
    }
    )
    memes.splice(currMemeIdx, 1)
    saveToStorage(MEMES_KEY, memes)
    renderMemes()
}

function onDownloadSavedMeme(elLink,meme){
    elLink.href = meme
    elLink.download = 'Your meme'
}