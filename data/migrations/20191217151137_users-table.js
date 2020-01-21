exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table.string('email', 128).notNullable();
    table.string('password', 128).notNullable();
    table.string('location');
    table.string('avatar_url', 256);
    table.string('github', 128);
    table.string('linkedin', 128);
    table
      .integer('role_id')
      .defaultTo(null)
      .unsigned()
      .references('id')
      .inTable('user_roles');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
