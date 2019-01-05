function establishConnection(){
    const mysql = require("mysql")
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"casadocodigo"
    })
    return connection
}


module.exports = establishConnection