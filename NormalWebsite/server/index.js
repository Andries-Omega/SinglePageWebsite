import { createServer } from 'http'
import { readFile } from 'fs'
const Port = 3040;

createServer((req, res) => {
   switch(req.url){
    case "/":
        loadPage(res, "./pages/home.html")
        return;
    case "/home":
        loadPage(res, "./pages/home.html")
        return;
    case "/second-page":
        loadPage(res, "./pages/second-page.html")
        return;
    default:
        loadPage(res, "./pages/not-found.html")
        return
   }
}).listen(Port, "localhost", null, () => {
    console.log(`Non single page website on http://localhost:${Port}`)
})

function loadPage(res, pageLocation) {
    readFile(pageLocation, (err, data) => {
        if(err){
            res.end('Something went wrong')
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data)
        res.end()
    })
}