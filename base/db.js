const knexfile = require("../knexfile");
const knex = require("knex");

module.exports = knex(knexfile[process.env.NODE_ENV]);
