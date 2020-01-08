require('dotenv').config();
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const dbEnv = process.env.DB_CONNECT || 'development';

module.exports = knex(knexConfig[dbEnv]);