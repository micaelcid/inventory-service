module.exports = (app) => {
    app.get('/products', (request, response, next) => {

        const productDao = app.repositories.ProductDao()
        
        productDao.all((error, result, fields) => {
            // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
            if(error) return next(error)
             
            response.render('products', {
                products: result
            })
        })
    })
    app.get('/products/:id',(request, response, next) => {
        response.send(request.params.id)
    })
    app.post('/product', (request, response) => {
        console.log(request)
    })
}
