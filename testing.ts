const fs = require('fs')
const path = "C:/Users/Master Oak/Videos/"

console.log(fs.readdirSync(path))

//recursively loop through all dirs and compose a list of all mp4 files