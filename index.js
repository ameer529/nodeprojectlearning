const http = require("http")
const myserver = http.createServer((req, res) => {
    console.log("Request Headers received.")
    console.log(req.headers)
    console.log("Request Body received.")
    console.log(req.body)
    res.end("Hello from Backend")
})

myserver.listen(3000, ()=> console.log ("Server Started"))