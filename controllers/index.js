
const Product = require('../models/product')
const Validator = require('../validators/product')

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
                .render('index', {
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

exports.formPromotion = (request, response, next) => {

    Product.all((error, result, fields) => {

        // Se o erro existir, passar a responsabilidade de trata-lo para o middleware
        if(error) return next(error)  

        // Content negotiation
        response
        .format({
            'text/html': () => {
                response
                .status(200)
                .render('promocoes/form', {
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

exports.savePromotion = (request, response, next) => {
    var	promocao	=	request.body;
    app.get('io').emit("novaPromocao",promocao);

    res.redirect("/promocoes/form");
}