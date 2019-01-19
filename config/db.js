const MongoClient = require('mongodb').MongoClient
let db = {}
const url = "mongodb://192.168.0.68:27017/livros"
MongoClient.connect(url, (error, dataBase) => {
    if (error) {
        return console.error('Error: ' + error.message);
    }
    console.log("Connected to Mongo")
    db = dataBase
})

//const mysql = require("mysql")
/* 
const credentials = {
    host: "localhost",
    user: "root",
    password: "",
}
credentials.database = process.env.NODE_ENV == "test" ? "casadocodigo_teste" : "casadocodigo"

const connection = mysql.createConnection(credentials)

connection.connect(function(error) {
    if (error) {
        return console.error('Error: ' + error.message);
    }
    if(process.env.NODE_ENV == "test"){
        console.log('Connected to the MySQL test server.');
    }
    else{
        console.log('Connected to the MySQL server.');
    }
}); */
module.exports = db