'use strict'


var gFilter = 'any'
var gFilterByText = ''
var isLargeFilter = false

const keys = ['any','funny', 'scarry', 'politics', 'emotion', 'food', 'tv-shows', 'animals', 'movies']
const moreKeys = ['romantic', 'sport', 'wild']

const gKeywordSearchCountMap = {
    'funny': 0, 'scarry': 0, 'politics': 0, 'emotion': 0, 'food': 0, 'tv-shows': 0, 'animals': 0, 'movies': 0, 'romantic': 0, 'sport': 0, 'wild': 0
}


function setFilterByText(txtFilter){
    gFilterByText = txtFilter
    
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

function getKeysToFilter() {
    let currKeys = []
    if (isLargeFilter) currKeys = [...keys, ...moreKeys]
    else currKeys = keys
    return currKeys
}

function setMoreKeys() {
    isLargeFilter = !isLargeFilter
}