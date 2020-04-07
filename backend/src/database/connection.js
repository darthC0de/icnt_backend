const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(process.env.NODE_ENV || config.development);

module.exports = connection;