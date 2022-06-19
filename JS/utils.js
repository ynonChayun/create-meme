'use strict'

/**** ****/
function getTextWidth(txt) {
    const context = document.querySelector('.main-canvas').getContext('2d')
    return context.measureText(txt).width
}
/**** ****/
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// <!-- git push -u origin main -->