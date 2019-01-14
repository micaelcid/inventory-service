const express = require('express')
const app = express()
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// Configuring the template engine
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator())

// Configuring static path for files
app.use('/static', 
    express.static('./node_modules/bootstrap/dist'),
    express.static('./static')
)

// Generating possible routes
consign()
.include('./routes')
.then('./config')
.into(app)

// Throws an exception when the route is not found
app.use((request, response, next) => {
    const error = "Página não encontrada"
    response.status(404).render('error', {error})
})

// Throws an exception for all server errors
app.use((error, request, response, next) => {
    response.status(500).render('error', {error})
})

module.exports = app