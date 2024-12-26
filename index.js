const http = require("http")
const fs = require("fs")
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: Request Received with URL: ${req.url}\n`;
    fs.appendFile("logs.txt", log, (err, data) => {})
    switch('${req.url}') {
        case "/":
            res.end("Homepage")
            // Code block for value1
            break;
        case '/contact':
            res.end("Conact Us Page")
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