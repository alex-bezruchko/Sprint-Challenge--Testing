const knex = require('knex');
const config = require('../knexfile.js');
require('dotenv').config()

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);
