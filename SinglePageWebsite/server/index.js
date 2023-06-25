import { createServer } from 'http'
import { readFile } from 'fs'
const Port = 3050;
 
createServer((req, res) => {
    readFile("../index.html", (err, data) => {
        if(err){
            res.end("Something went wrong")
        }
        res.writeHead(200, {"Content-Type": "text/html"})
        
        res.write(data)
        res.end()
    })
}).listen(Port, "localhost", null, () => {
    console.log(`Non single page website on http://localhost:${Port}`)
})