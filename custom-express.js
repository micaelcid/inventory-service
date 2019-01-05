const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.use('/static', 
    express.static('./node_modules/bootstrap/dist'),
    express.static('./static')
)


require('./routes/products')(app)
require('./routes/index')(app)
module.exports = app