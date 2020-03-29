const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile');

const connection = knex(configuration[environment]);

const connection = knex(config);

module.exports = connection;