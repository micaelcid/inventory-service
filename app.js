/**
 * Node.js Express Server by Micael Cid
*/

// Retorna o express configurado
const app = require('./bootstrap')
const port = 3000
const ip = "localhost"

const server = app.listen(port, ip, () => {
    console.log(`Server is running now on http://${ip}:${port}`)
})




