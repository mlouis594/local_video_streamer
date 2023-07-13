import { config } from 'dotenv'
config()
import express, { Request, Response } from 'express'
import cors from 'cors'

const PORT = 5001
const app = express()

//will tell our app that locally we will allow 
app.use(cors({
    origin: "*"
}))

//this line allows support for json requests
app.use(express.json())

app.listen(PORT)