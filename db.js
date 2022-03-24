const connectionString = process.env.DB_URI;
const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool ({
    connectionString,
})

module.exports = pool;