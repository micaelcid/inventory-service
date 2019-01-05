module.exports = (app) => {
    app.get('/products', (request, response) => {

        const connection = require('../config/connectionFactory')()
        
        connection.query("select * from livros", (err, result, fields) => {
            response.render('products', {
                products: result
            })
        })
    })
    app.post('/product', (request, response) => {
        console.log(request)
    })
}
