const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"casadocodigo"
})

connection.connect(function(error) {
if (error) {
    return console.error('Error: ' + error.message);
}
    console.log('Connected to the MySQL server.');
});
module.exports = connection