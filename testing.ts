const log = require("console")

const fs = require('fs')
const path = "C:/Users/Master Oak/Videos/"
const { getVideoDurationInSeconds } = require('get-video-duration')


function getVids(dirName){
    let files = fs.readdirSync(dirName);
    let videos = []
    files.forEach(element => {
        if(!fs.statSync(dirName+element).isFile()){
            videos.push(...getVids(`${dirName}${element}/`))
        } else{
            if(element.includes(".mp4")) getVideoDurationInSeconds(`${dirName}${element}/`).then((dur)=>{
                videos.push({"title":element, "duration": dur})
            }).catch()
        }
    })
    return videos
}

console.log(getVids(path))


//recursively loop through all dirs and compose a list of all mp4 files