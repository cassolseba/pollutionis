const { connectionString } = require('pg/lib/defaults');

const Pool = require('pg').Pool;
require('dotenv').config();
connectionString = process.env.DB_URI;

const pool = new Pool ({
    connectionString,
})

module.exports = pool;