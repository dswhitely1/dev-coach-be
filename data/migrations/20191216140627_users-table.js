exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table.string('email', 128).notNullable();
    table.string('password', 50).notNullable();
    table.string('location');
    table
      .integer('user_role_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('user_roles');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
