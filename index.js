const http = require("http")
const fs = require("fs")
const url = require("url")
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: Request Received with URL: ${req.url}\n`;
    fs.appendFile("logs.txt", log, (err, data) => {})
    const myurl = url.parse(req.url, true)
    console.log(myurl.pathname)
    switch(myurl.pathname) {
        case "/":
            res.end("Homepage")
            // Code block for value1
            break;
        case '/about':
            res.end(`Hi ${myurl.query.key1}, About Us Page`)
            // Code block for value2
            break;
        default:
            res.end("404 not found")
            // Code block if no case matches
    }
    // console.log("Request Headers received.")
    // console.log(req.headers)
    // console.log("Request Body received.")
    // console.log(req.body)
    // console.log("Request received.")
    // console.log(req)
})

myserver.listen(3000, ()=> console.log ("Server Started"))