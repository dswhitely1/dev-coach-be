const db = require('../data/dbConfig');

function find() {
  return db('users_table');
}

module.exports = {
  find,
};
