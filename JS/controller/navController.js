'use strict'


function addMenu() {
    document.body.classList.add('menu-open');
    document.querySelector('.modal').classList.add('openModal')
}

function closeMenu() {
    document.body.classList.remove('menu-open');
    document.querySelector('.modal').classList.remove('openModal')
}

function toggleActive(elBtn) {
    const elActive = document.querySelector('.active')
    if (elActive) elActive.classList.remove('active')
    console.log(elBtn);
    elBtn.classList.add('active')
}

function openMemes(){
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.editor-contaioner').style.display = 'none'
    document.querySelector('.memes-container').style.display = 'block'
}


function onSetGallery(elBtn) {
    toggleActive(elBtn)
    const elGallery = document.querySelector('.gallery-container')
    if (elGallery.style.display === 'block') return

    elGallery.style.display = 'block'
    document.querySelector('.editor-contaioner').style.display = 'none'
    document.querySelector('.memes-container').style.display = 'none'
}