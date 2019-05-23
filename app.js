/**
 * Media Player
 * Kaitlyn Hennessy
 * kmh319
 */

const { dialog } = require('electron').remote;
const mediaDiv = document.getElementById("media");
const headerDiv = document.getElementById("header");

function fileUpload(){
    let path = (dialog.showOpenDialog({
            filters: [
                { name: 'Audio', extensions: ['mp3', 'wav', 'ogg'] },
                { name: 'Movies', extensions: ['mp4', 'mov', 'wmv']}
            ],
            properties: ['openFile'] 
        })).toString();

    let ext = path.substring(path.length - 3, path.length);
    let fileName = (path.split(/[\\\/]/));
    fileName = fileName[fileName.length - 1];
    let tagType;

    if ((ext === "mp3") || (ext === "wav") || (ext === "ogg"))
        tagType = "audio";
    else
        tagType = "video";
    let header = "<h3>Playing " + fileName + "</h3>";
    let tag = "<" + tagType + " id='" + tagType + "Player' src='" + path + "' controls></" + tagType + ">";
    headerDiv.innerHTML = header;
    mediaDiv.innerHTML = tag;
 }