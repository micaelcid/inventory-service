/**
 * Pure Node.js Server by Micael Cid
*/

const http = require('http')
const port = 3000
const ip = "localhost"
const server = http.createServer((request, response) => {
    response.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    if(request.method == "GET"){
        if(request.url == "/"){
            response.end("<h1>Home</h1>")
        }
        else if(request.url == "/products"){
            response.end("<h1>Products</h1>")
        }
        else if(request.url == "/json"){
            response.writeHead(200, {
                "Content-Type":"Application/json;charset=utf-8"
            })
            const data = {
                escola: "Caelum",
                cidade: "São Paulo"
            }
            response.end(JSON.stringify(data))
        }
        else{
            response.end("<h1>Essa página não existe</h1>")
        }
    }
})
server.on('connection', (user) => {
    console.log(`User ${user.remoteAddress} connected`)
})


server.listen(port, ip)

console.log(`Server is running now on http://${ip}:${port}`)