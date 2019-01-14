const ProductsController = require('../controllers/product')

module.exports = (app) => {

    app.get('/products', ProductsController.all)
    app.post('/product', ProductsController.create)
    app.delete('/product/:id', ProductsController.delete)    
    app.put('/product', ProductsController.update)
    
}
