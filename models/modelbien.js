const conexion = require("./conexion");

function mostrarbien() {
    return new Promise(
        (resolve, reject) => {
            conexion.query("SELECT* FROM bien", function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }
    );
}

function mostrarbienporid(cod) {
    return new Promise(
        (resolve, reject) => {
            const query = conexion.format("SELECT* FROM bien WHERE cod = ? ", [cod])
            conexion.query(query, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            })
        }
    );
}

function insertarbien(cod) {
    return new Promise(
        (resolve, reject) => {
            const query = conexion.format("INSERT INTO bien(cod, cod_ant, tipo, nombre, serie ,marca, monto) VALUES (?,?,?,?,?,?,?)", [cod.cod, cod.cod_ant, cod.tipo, cod.nombre, cod.serie, cod.marca, cod.monto])
            conexion.query(query, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }
    )

};


function actualizarbien(cod) {
    return new Promise(
        (resolve, reject) => {
            const query = conexion.format("UPDATE bien SET  cod_ant = ?,tipo  =? , nombre = ?, serie =? ,modelo = ?, marca =? , monto = ?  WHERE cod = ? ", [cod.cod_ant, cod.tipo, cod.nombre, cod.serie, cod.modelo, cod.marca, cod.monto, cod.cod])
            conexion.query(query, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }
    )
}

function eliminarbien(cod) {
    return new Promise(
        (resolve, reject) => {
            const query = conexion.format("DELETE FROM bien WHERE cod = ?", [cod.cod])
            conexion.query(query, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            })
        }
    )
}



module.exports = { mostrarbien, insertarbien, actualizarbien, eliminarbien, mostrarbienporid };