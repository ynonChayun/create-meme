'use strict'

// share to facebook
function shareMeme() {

    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");// Gets the canvas content as an image format

    function onSuccess(uploadedImgUrl) {

        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`);
    }
    //Send the image to the server
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    //Pack the image for delivery
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    //Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })   //Gets the result and extract the text/ url from it
        .then(res => res.text())
        .then((url) => {
            
            //Pass the url we got to the callBack func onSuccess, that will create the link to facebook
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

// download meme
function downloadMeme(canvasData,elLink){
    elLink.href = canvasData
    elLink.download = 'Your meme'
}

// save meme to memes archive and open the archive 
function saveMeme(canvasData){
    saveMemesToStorage(canvasData)
    renderMemes()
    toggleActive(document.querySelector('.memes-anchor'))
    openMemes()
}