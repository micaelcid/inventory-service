const app = require('../../bootstrap')
const assert = require('assert')
const request = require('supertest')(app)


describe("# Product controllers", () => {
    it("## Get all products", (done) => {
        request.get('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done())
    })
    it("## Post product", (done) => {
        request.post('/products')
        .set('Accept', 'application/json')
        .send({
            titulo: "Teste",
            descricao: "Teste",
            preco: 420
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done())
    })
    it("## Put product", (done) => {
        request.put('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .send({
            id:1,
            titulo: "Teste",
            descricao: "Teste",
            preco: 420
        })
        .expect(200, done())
    })
    it("## Delete product", (done) => {
        const id = Math.round(Math.random() * 100)
        request.delete('/product/:id'+ id)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done())
    })
    
})