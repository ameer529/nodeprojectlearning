const http = require("http")
const fs = require("fs")
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: Request Received with URL: ${req.url}\n`;
    fs.appendFile("logs.txt", log, (err, data) => {
        
    })
    // console.log("Request Headers received.")
    // console.log(req.headers)
    // console.log("Request Body received.")
    // console.log(req.body)
    // console.log("Request received.")
    // console.log(req)
    res.end("Hello from Backend")
})

myserver.listen(3000, ()=> console.log ("Server Started"))