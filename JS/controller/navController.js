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
