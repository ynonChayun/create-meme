'use strict'


var gFilter = ''
var isLargeFilter = false

const keys = ['funny', 'scarry', 'politics', 'emotion', 'food', 'tv-shows', 'animals', 'movies']
const moreKeys = ['romantic', 'sport', 'wild']

const gKeywordSearchCountMap = {
    'funny': 0, 'scarry': 0, 'politics': 0, 'emotion': 0, 'food': 0, 'tv-shows': 0, 'animals': 0, 'movies': 0, 'romantic': 0, 'sport': 0, 'wild': 0
}


function setFilter(filter) {
    gFilter = filter

    for (var key in gKeywordSearchCountMap) {
        if (key === filter) gKeywordSearchCountMap[key]++
    }
}

function getCurrScore(filter) {
    for (var key in gKeywordSearchCountMap) {
        if (key === filter) return gKeywordSearchCountMap[key]
    }
}

function getKeysToImg() {
    const currKeys = []
    const keys =  getKeysToFilter()
    for (var i = 0; i < getRandInt(1, 3); i++) {
        currKeys.push(keys[getRandInt(0, keys.length - 1)])
    }

    return currKeys
}

function getKeysToFilter() {
    let currKeys = []
    if (isLargeFilter) currKeys = [...keys, ...moreKeys]
    else currKeys = keys
    return currKeys
}

function setMoreKeys() {
    isLargeFilter = !isLargeFilter
}