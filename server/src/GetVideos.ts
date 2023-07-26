import fs from 'fs'

export default function GetVideos(dirName: string){
    let files = fs.readdirSync(dirName);
    let videos: {title:string, fullPath:string}[] = []
    files.forEach(element => {
        if(!fs.statSync(dirName+element).isFile()){
            videos.push(...GetVideos(`${dirName}${element}/`))
        } else{
            if(element.includes(".mp4")) videos.push({"title": element, "fullPath": dirName+element})
        }
    })
    return videos
}

