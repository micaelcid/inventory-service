
module.exports = (app) => {
    class ProductDao{
        constructor(){
            this.db = app.config.db
        }
        async all(callback){
            await this.db.query('select * from livros', callback)
        }
        create(product){
            return new Promise((resolve, reject) => {
                this.db.query('insert into livros set ?', product, (error, result, fields) => {
                    if(error) return reject(error)

                    product.id = result.insertId
                    resolve(product)
                })
            }) 
        }
        async update(product, callback){
            console.log(product)
            await this.db.query(`update livros
            set ? where id = ?`, [
                product,
                product.id
            ], callback)
        }
        async delete(id, callback){
            await this.db.query('delete from livros where id = ?', id, callback)
        }
    }
    return () => new ProductDao
}
   