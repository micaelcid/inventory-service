
const Product = require('../models/product')
const Validator = require('../validators/product')

exports.create = (request, response, next) => {
    Validator.fields(request, response)
   
    Product.create(request.body, (error, result, fields) => {
        if(error) return next(error)
        
        request.body.id = result.insertId
        response
        .status(201)
        .json(request.body)
        
    })
}

exports.all = (request, response, next) => {
    Product.all((error, result, fields) => {

        // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
        if(error) return next(error)  

        // Content negotiation
        response
        .format({
            'text/html': () => {
                response
                .status(200)
                .render('products', {
                    products: result
                })
            },
            'application/json': () => {
                response
                .status(200)
                .json(result)
            },
        })
    })
}

exports.update = (request, response, next) => {

    Validator.fields(request, response)
    
    Product.update(request.body, (error, result, fields) => {

        // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
        if(error) return next(error)

        response
        .status(204)
        .json(request.body)
    })

}

exports.delete = (request, response, next) => {

    Validator.id(request.params.id)
    
    Product.delete(request.params.id, (error, result, fields) => {
        // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
        if(error) return next(error)

        response
        .status(204)
        .json(request.params.id)
    })

}