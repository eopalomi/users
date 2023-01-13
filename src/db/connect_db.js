// Importamos Libreria PG Node
const { Pool } = require('pg');

// Importamos Credenciales
const config = require('../db/credentials_config')

//Creamos un pool de conexiones
const pool = new Pool(config.pg_frame);

// Funciones para ejecutar queries
const execQuery = (query, params) => pool.query(query, params);

module.exports = {
    execQuery
};