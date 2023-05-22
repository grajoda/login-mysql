const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig.js')

const connection = mysql.createPool(dbConfig);

connection.getConnection((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});

//CREATE
function createUser(username, email, password, callback){
    const sql = `INSERT INTO users (name, email, password) VALUES ('${username}', '${email}', '${password}')`;
    connection.query(sql, (error, results, field) => {
        if (error) {
            return callback(error, null);
        } else {
            return callback(null, results);
        }
    });
}


// READ
function findUserById(userId, callback){
    const sql = `SELECT * FROM users WHERE id_user = ${userId}`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results)
        }
    });
}
function findUserByUsername(username, callback) {
    const sql = `SELECT * FROM users WHERE name = '${username}'`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results)
        }
    });
}


// UPDATE 
function updateUser(fields, value, id, callback){
    const sql = `UPDATE users SET '${fields}' = '${value}' WHERE id = '${id}'`
    connection.query(sql, (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// DELETE 
function deleteUser(id, callback){
    const sql = `DELETE user WHERE id = '${id}'`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}  


module.exports = {createUser, findUserById, findUserByUsername, updateUser, deleteUser};