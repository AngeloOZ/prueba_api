const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql-jessicamilena.alwaysdata.net',
    database: process.env.DB_NAME || 'jessicamilena_bienes',
    user: process.env.DB_USER || '289153_root',
    password: process.env.DB_PWD || 'Milewid@6593#'
});

conexion.connect(function (error) {
    if (error)
        throw error;
    console.log("conexión existosa")
});



module.exports = conexion;