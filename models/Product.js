const db = require('../config/db')

class Product{
    constructor(){
        this.db = db
    }
    async all(callback){
        await this.db.query('select * from livros', callback)
    }
    async create(product, callback){
        await this.db.query('insert into livros set ?', product, callback)
    }
    async update(product, callback){
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
   
module.exports = new Product