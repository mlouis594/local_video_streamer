import { config } from 'dotenv'
config()
import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import GetVideos from './GetVideos'


const PORT = 5001
const app = express()
const path = "C:/Users/Master Oak/Videos/"

//will tell our app that locally we will allow 
app.use(cors({
    origin: "*"
}))

//this line allows support for json requests
app.use(express.json())

app.get("/videos", (req:Request, res:Response) => {
    res.send(GetVideos(path))
})

app.get("/watch/:path", (req:Request, res:Response) => {
    const movieTitle: string = req.params.path;
    const movieList: {title:string, fullPath:string}[] = GetVideos(path)
    console.log(movieTitle)
    movieList.forEach((movie)=>{
        if(movie.title ==movieTitle){
             //checking that the header is in the proper format
        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Requires Range header");
            return;
        }
    
        //parsing video info
        const videoSize = fs.statSync(movie.fullPath).size;
        
        //this chunk size is 1MB
        const CHUNK_SIZE = 10 ** 6;
        
        //need more info on this line
        const start = Number(range.replace(/\D/g, ""));
        
        //need more info on this calculation
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1;
        
        //building the header so the browser knows to play something (confirm this)
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };
    
        //begin playing the video
        res.writeHead(206, headers);
        const videoStream = fs.createReadStream(movie.fullPath, { start, end });
        videoStream.pipe(res);
        }
    })
})


app.listen(PORT)