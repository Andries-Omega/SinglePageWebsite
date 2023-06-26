import { createServer } from 'http'
import { readFile, existsSync } from 'fs'
const Port = 3040;

createServer((req, res) => {
    if(req.url.split(".").length === 1) {
        loadPage(res, req.url.slice(1))
        return
    }

    if (existsSync(req.url.slice(1))){
        loadFile(res, req.url.slice(1))
    }else {
        res.end()
    }
}).listen(Port, "localhost", null, () => {
    console.log(`Non single page website on http://localhost:${Port}`)
})

function loadPage(res, pageName) {
    const pagePath = existsSync(`pages/${pageName}.html`) ? `pages/${pageName}.html` : "pages/not-found.html"

    readFile(pagePath, (err, data) => {
        if(err){
            res.end('Something went wrong')
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data, "utf-8")
    })
}

function loadFile(res, fileName) {
    readFile(fileName, (err, data) => {
        if(err){
            res.end('Something went wrong')
        }

        res.writeHead(200, {"Content-Type": "text/css"}) // Because i have put a full stop that only css will be fetched in this server
        res.end(data, "utf-8")
    })      
}