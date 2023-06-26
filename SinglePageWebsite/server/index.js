import { createServer } from 'http'
import { readFile, existsSync } from 'fs'
const Port = 3050;
 
createServer((req, res) => {
    if(req.url === '/'){
        loadFile(res, "index.html")
        return;
    }

    if (existsSync(req.url.slice(1))){
        loadFile(res, req.url.slice(1))
    } else {
        res.end()
    }
}).listen(Port, "localhost", null, () => {
    console.log(`Single page website on http://localhost:${Port}`)
})

function loadFile(res, fileName) {
    readFile(fileName, (err, data) => {
        if(err){
            res.end("Something went wrong")
            throw new Error(err)
        }

        const fileNameSuffix = fileName.split('.')[1]

        const contentType = fileNameSuffix === 'js' ? "application/javascript" :  `text/${fileName.split('.')[1]}`

        res.writeHead(200, {"Content-Type": contentType})
        
        res.end(data, "utf-8")
    })
}
