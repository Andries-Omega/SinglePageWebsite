import { createServer } from 'http'
import { readFile, existsSync } from 'fs'
const Port = 3040;

createServer((req, res) => {
    if(req.url.split(".").length === 1) {
        return loadPage(res, req.url.slice(1))
    }
    if (existsSync(req.url.slice(1))){
        return loadFile(res, req.url.slice(1))
    }else {
        res.end()
    }
}).listen(Port, "localhost", null, () => {
    console.log(`Non single page website on http://localhost:${Port}`)
})

function loadPage(res, pageName) {
    const pagePath = existsSync(`pages/${pageName}.html`) ? `pages/${pageName}.html` : "pages/not-found.html"

    loadFile(res, pagePath)
}

function loadFile(res, fileName) {
    readFile(fileName, (err, data) => {
        if(err){
            res.end('Something went wrong')
        }

        res.writeHead(200, {"Content-Type": `text/${fileName.split(".")[1]}`})
        res.end(data, "utf-8")
    })      
}