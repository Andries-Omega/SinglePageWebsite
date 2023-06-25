import { createServer } from 'http'

createServer((req, res) => {

}).listen(process.env.PORT, process.env.HOST_NAME, null, () => {
    console.log(`Non single page website on http://localhost:${process.env.PORT}`)
})