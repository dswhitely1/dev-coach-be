exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table
      .string('email', 128)
      .unique()
      .notNullable();
    table.string('password', 128).notNullable();
    table.string('location');
    table
      .integer('user_role_id')
      .unsigned()
      .references('id')
      .inTable('user_roles')
      .defaultTo(null);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
