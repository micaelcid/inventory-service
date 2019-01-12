/**
 * Node.js Express Server by Micael Cid
*/

// Retorna o express configurado
const app = require('./custom-express')
const port = 3000
const ip = "localhost"

const server = app.listen(port, ip, () => {
    console.log(`Server is running now on http://${ip}:${port}`)
})




