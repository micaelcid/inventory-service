/**
 * Node.js Express Server by Micael Cid
*/

// Retorna o express configurado
const app = require('./custom-express')
const port = 3000
const ip = "localhost"
var users = []

const server = app.listen(port, ip, () => {
    console.log(`Server is running now on http://${ip}:${port}`)
})

server.on("connection", (socket) => {
    userIp = socket.remoteAddress
    if(!users.find(user => user == userIp)){
        users.push(userIp)
    }
    console.log(`User ${userIp} connected`)
    socket.on("close", () => {
        users.filter(user => user != userIp)
        console.log(`User ${userIp} disconnected`)
    })
})



