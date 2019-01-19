const IndexController = require('../controllers/index')

module.exports = (app) => {
    app.get('/', IndexController.all)
    app.get('/promocoes/form', IndexController.formPromotion)
    app.post('/promocoes', IndexController.savePromotion)
}
