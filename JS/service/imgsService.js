'use strict'

var gImgs = [
    {
        id: 1,
        url: `meme-imgs (square)/img-1.jpg`,
        keywords: ['politics', 'funny',]
    },
    {
        id: 2,
        url: `meme-imgs (square)/img-2.jpg`,
        keywords: ['animals', 'emotion','wild'],
    },
    {
        id: 3,
        url: `meme-imgs (square)/img-3.jpg`,
        keywords: ['animals', 'emotion', 'romantic'],
    },
    {
        id: 4,
        url: `meme-imgs (square)/img-4.jpg`,
        keywords: ['animals','wild']
    },
    {
        id: 5,
        url: `meme-imgs (square)/img-5.jpg`,
        keywords: ['']
    },
    {
        id: 6,
        url: `meme-imgs (square)/img-6.jpg`,
        keywords: ['tv-shows']
    },
    {
        id: 7,
        url: `meme-imgs (square)/img-7.jpg`,
        keywords: ['funny',]
    },
    {
        id: 8,
        url: `meme-imgs (square)/img-8.jpg`,
        keywords: ['funny', 'tv-shows']
    },
    {
        id: 9,
        url: `meme-imgs (square)/img-9.jpg`,
        keywords: ['funny',]
    },
    {
        id: 10,
        url: `meme-imgs (square)/img-10.jpg`,
        keywords: ['politics', 'funny',]
    },
    {
        id: 11,
        url: `meme-imgs (square)/img-11.jpg`,
        keywords: ['emotion', 'tv-shows','sport']
    },
    {
        id: 12,
        url: `meme-imgs (square)/img-12.jpg`,
        keywords: ['tv-shows',]
    },
    {
        id: 13,
        url: `meme-imgs (square)/img-13.jpg`,
        keywords: ['emotion', 'tv-shows', 'movies', 'romantic']
    },
    {
        id: 14,
        url: `meme-imgs (square)/img-14.jpg`,
        keywords: ['scarry','emotion','movies']
    },
    {
        id: 15,
        url: `meme-imgs (square)/img-15.jpg`,
        keywords: ['tv-shows']
    },
    {
        id: 16,
        url: `meme-imgs (square)/img-16.jpg`,
        keywords: ['funny', 'tv-shows']
    },
    {
        id: 17,
        url: `meme-imgs (square)/img-17.jpg`,
        keywords: ['politics']
    },
    {
        id: 18,
        url: `meme-imgs (square)/img-18.jpg`,
        keywords: ['tv-shows', 'movies']
    }
]


function getImgs() {
    var imgs = [...gImgs]
    if (gFilter) {
        imgs = imgs.filter(img => img.keywords.includes(gFilter))
    }
    return imgs
}

function getImg() {
    const memeImgId = getMeme().selectedImgId
    return gImgs.filter(img => img.id === memeImgId)[0]
}

// function createImgs() {
//     const imgs = []
//     for (var i = 1; i < 19; i++) {
//         imgs.push({
//             id: i,
//             url: `meme-imgs (square)/img-${i}.jpg`,
//             keywords: getKeysToImg()
//         })
//     }
//     return imgs
// }