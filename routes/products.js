module.exports = (app) => {
    app.get('/products', (request, response, next) => {

        const productDao = app.repositories.ProductDao()
        productDao.all((error, result, fields) => {
            // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
            if(error) return next(error)
            
            /**
             * Content negotiation
             */
            response.format({
                html(){
                    response.render('products', {
                        products: result
                    })
                },
                json(){
                    response.json(result)
                },
            })
            
        })
    })
    app.post('/product', (request, response) => {

        request.assert('titulo', 'O título é obrigatório').notEmpty()
        request.assert('preco', 'O preco é obrigatório').isFloat()

        const errors = request.validationErrors()

        if(errors){
            response.status(400).json({errors})
        }

        const productDao = app.repositories.ProductDao()
        productDao.create(request.body)
        .then(result => {
            response.send(result)
        })
        .catch(error => next(error))

    })

    app.delete('/product/:id',(request, response, next) => {
        const productDao = app.repositories.ProductDao()
        productDao.delete(request.params.id, (error, result, fields) => {
            // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
            if(error) return next(error)
    
            response.send(request.params.id)
        })
    })

    app.put('/product',(request, response, next) => {

        const productDao = app.repositories.ProductDao()
        productDao.update(request.body, (error, result, fields) => {
            // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
            if(error) return next(error)
    
            response.status(204).send(request.body)
        })
    })
    
}
