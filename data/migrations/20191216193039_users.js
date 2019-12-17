exports.up = function(knex) {
  return knex.schema.createTable('users_table', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table.string('email', 128).notNullable();
    table.string('password', 128).notNullable();
    table.string('location');
    table
      .integer('user_role_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('user_roles_table');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_table');
};
