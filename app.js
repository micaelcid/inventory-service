/**
 * Node.js Express Server by Micael Cid
*/

const express = require('express')
const app = express()
const port = 3000
const ip = "localhost"
var users = []

app.set("view engine", "ejs")

app.get("/", (request, response) => {
    response.send('Home')
})

app.get("/products", (request, response) => {
    response.render('products')
})


var server = app.listen(port, ip, () => {
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


