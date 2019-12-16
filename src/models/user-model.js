const db = require('../../data/dbConfig');

function find() {
  return db('users').select(
    'id',
    'first_name',
    'last_name',
    'password',
    'email',
    'location',
    'user_role_id',
  );
}

function findBy(email) {
  return db('users')
    .where(email)
    .first();
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => findById(ids[0]));
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};
