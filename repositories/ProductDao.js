
module.exports = (app) => {
    class ProductDao{
        constructor(){
            this.db = app.config.db
        }
        async all(callback){
            await this.db.query('select * from livros', callback)
        }
    }
    return () => new ProductDao
}
   